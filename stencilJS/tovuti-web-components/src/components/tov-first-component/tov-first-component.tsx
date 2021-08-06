import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'tov-first-component',
  styleUrl: 'tov-first-component.css',
  shadow: true,
})
export class TovFirstComponent {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
