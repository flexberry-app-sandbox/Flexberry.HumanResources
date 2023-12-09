import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as PersonMixin
} from '../mixins/regenerated/models/i-i-s-human-resources-person';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(PersonMixin, Validations, {
});

defineProjections(Model);

export default Model;
