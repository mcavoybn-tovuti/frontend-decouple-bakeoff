<template>
    <div class="modal-table-container">
		<button type="button" class="btn btn-light border" data-bs-toggle="modal" :data-bs-target="'#' + modalId">
			<span class="icon-list"></span>
			{{ buttonText }}
		</button>

			<!-- Modal -->
		<div class="modal fade" :id="modalId" tabindex="-1" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
				<div class="modal-header">
					<button 
						@click="addRow" 
						class="btn btn-success"
					>
						<span class="icon-plus"></span>
					</button>
				</div>
				<div class="modal-body">
					<table class="table table-striped">
						<thead>
							<tr>
								<th scope="col" v-for="column in columns" :key="column.key">{{column.title}}</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="row in tableData" :key="row.id">
								<td 
									v-for="column in columns" 
									:key="column.key"
								>
									<input 
										:type="column.type" 
										v-model="row[column.key]"
										v-if="column.type != 'select'"
									>
									<select v-else v-model="row[column.key]">
										<option v-for="option in column.options" :key="option.name" :value="option.value">{{option.text}}</option>
									</select>
								</td>
								<td>
									<a @click="removeRow(row.id)" class="remove btn button btn-danger"><span class="icon-minus"></span> </a>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
					<button type="button" class="btn btn-primary"  data-bs-dismiss="modal" @click="updateValue">Save changes</button>
				</div>
				</div>
			</div>
		</div>
    </div>
</template>

<script>
import { v4 as uuid } from 'uuid';

export default {
	name: 'ModalTable',
	props: {
		'button-text': {
			type: String,
			default: 'ButtonText',
		},
		'columns': {
			type: Array,
			default: () => [
				{
					title: 'Column 1',
					key: 'column_1',
					type: 'text'
				},
				{
					title: 'Column 2',
					key: 'column_2',
					type: 'number'
				}
			],
		},
		'value': Array
	},
	data() {
		return {
			tableData: [],
			modalId: uuid()
		}
	},
	// https://vuejs.org/v2/api/#model
	// This sets the v-model data key to the 'value' prop
	// and registers a 'valuechange' eventhandler that can be used
	// to update the value whenever it is changed 
	model: {
        prop: 'value',
        event: 'valuechange'
    },
	computed: {
		valueLocal: {
			get: function() {
				return this.value;
			},
			set: function(value) {
				this.$emit('valuechange', value);
			}
		}
	},
	methods: {
		updateValue() {
			this.valueLocal = JSON.parse(JSON.stringify(this.tableData));
		},
		addRow() {
			let row = {
				id: uuid()
			};
			this.columns.forEach(column => {
				row[column.key] = '';
			});
			this.tableData.push(row);
		},
		removeRow(rowId) {
			this.tableData = this.tableData.filter(row => row.id != rowId);
		}
	}
}
</script>

<style scoped lang="scss">
</style>
