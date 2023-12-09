import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as PersonPositionMixin
} from '../mixins/regenerated/models/i-i-s-human-resources-person-position';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(PersonPositionMixin, Validations, {
});

defineProjections(Model);

export default Model;
