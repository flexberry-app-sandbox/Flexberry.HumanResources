import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  position: DS.belongsTo('i-i-s-human-resources-person-position', { inverse: null, async: false }),
  company: DS.belongsTo('i-i-s-human-resources-company', { inverse: 'staff', async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.i-i-s-human-resources-person.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  position: {
    descriptionKey: 'models.i-i-s-human-resources-person.validations.position.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  company: {
    descriptionKey: 'models.i-i-s-human-resources-person.validations.company.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('PersonE', 'i-i-s-human-resources-person', {
    name: attr('Name', { index: 0 }),
    position: belongsTo('i-i-s-human-resources-person-position', 'Position', {
      name: attr('Name', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'name' })
  });
};
