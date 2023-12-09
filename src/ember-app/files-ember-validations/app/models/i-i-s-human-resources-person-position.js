import {
  defineNamespace,
  defineProjections,
  Model as PersonPositionMixin
} from '../mixins/regenerated/models/i-i-s-human-resources-person-position';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(PersonPositionMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
