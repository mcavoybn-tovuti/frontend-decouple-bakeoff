import { newSpecPage } from '@stencil/core/testing';
import { TovFirstComponent } from '../tov-first-component';

describe('tov-first-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TovFirstComponent],
      html: `<tov-first-component></tov-first-component>`,
    });
    expect(page.root).toEqualHtml(`
      <tov-first-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </tov-first-component>
    `);
  });
});
