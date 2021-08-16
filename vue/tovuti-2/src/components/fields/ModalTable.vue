<template>
    <div class="modal-table-container">
		<button type="button" class="btn btn-light border" data-bs-toggle="modal" data-bs-target="#exampleModal">
			<span class="icon-list"></span>
			{{ buttonText }}
		</button>

			<!-- Modal -->
		<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
							<tr v-for="row in tableData[columns[0].key]" :key="tableData[columns[0].key].indexOf(row)">
								<td>{{tableData[columns[0].key].indexOf(row)}}</td>
								<td 
									v-for="column in columns" 
									:key="column.key"
								>
									<input 
										:type="column.type" 
										v-model="tableData[column.key][tableData[column.key].indexOf(row)]"
									>
									{{'tableData['+column.key+'][tableData['+column.key+'].indexOf('+row+')]' }}
								</td>
								<td>
									<a 
										@click="() => removeRow(tableData[columns[0].key].indexOf(row))" class="remove btn button btn-danger"><span class="icon-minus"></span> </a>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
					<button type="button" class="btn btn-primary" @click="updateValue">Save changes</button>
				</div>
				</div>
			</div>
		</div>
    </div>
</template>

<script>
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
		'value': Object
	},
	data() {
		let tableDefault = {};
		this.columns.forEach(column => {
			tableDefault[column.key] = [];
		});

		return {
			tableData: Object.keys(this.value).length != this.columns.length ? tableDefault : this.value
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
			this.columns.forEach(column => {
				this.tableData[column.key].push('');
			});
		},
		removeRow(index) {
			this.columns.forEach(column => {
				this.tableData[column.key] = this.tableData[column.key].slice(0, index).concat(this.tableData[column.key].slice(index + 1));
			})
		}
	}
}
</script>

<style scoped lang="scss">
</style>
