import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  staff: DS.hasMany('i-i-s-human-resources-person', { inverse: 'company', async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.i-i-s-human-resources-company.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  staff: {
    descriptionKey: 'models.i-i-s-human-resources-company.validations.staff.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('CompanyE', 'i-i-s-human-resources-company', {
    name: attr('Name', { index: 0 }),
    staff: hasMany('i-i-s-human-resources-person', 'Staff', {
      name: attr('Name', { index: 0 }),
      position: belongsTo('i-i-s-human-resources-person-position', 'Position', {
        name: attr('Name', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'name' })
    })
  });

  modelClass.defineProjection('CompanyL', 'i-i-s-human-resources-company', {
    name: attr('Name', { index: 0 })
  });
};
