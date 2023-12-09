import {
  defineNamespace,
  defineProjections,
  Model as CompanyMixin
} from '../mixins/regenerated/models/i-i-s-human-resources-company';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(CompanyMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
