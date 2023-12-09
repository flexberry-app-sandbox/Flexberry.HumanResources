import {
  defineNamespace,
  defineProjections,
  Model as PersonMixin
} from '../mixins/regenerated/models/i-i-s-human-resources-person';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(PersonMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
