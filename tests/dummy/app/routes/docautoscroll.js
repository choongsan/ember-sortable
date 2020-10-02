import Route from '@ember/routing/route';
import { A as a } from '@ember/array';

export default Route.extend({
  model() {
    return {
      items: a([...Array(99).keys()].map((_, idx) => `Item #${idx+1}`))
    };
  }
});
