import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISHumanResourcesCompanyLForm from './forms/i-i-s-human-resources-company-l';
import IISHumanResourcesPersonPositionLForm from './forms/i-i-s-human-resources-person-position-l';
import IISHumanResourcesCompanyEForm from './forms/i-i-s-human-resources-company-e';
import IISHumanResourcesPersonPositionEForm from './forms/i-i-s-human-resources-person-position-e';
import IISHumanResourcesCompanyModel from './models/i-i-s-human-resources-company';
import IISHumanResourcesPersonPositionModel from './models/i-i-s-human-resources-person-position';
import IISHumanResourcesPersonModel from './models/i-i-s-human-resources-person';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-human-resources-company': IISHumanResourcesCompanyModel,
    'i-i-s-human-resources-person-position': IISHumanResourcesPersonPositionModel,
    'i-i-s-human-resources-person': IISHumanResourcesPersonModel
  },

  'application-name': 'Human resources',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Human resources',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Human resources',
          title: 'Human resources'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'human-resources': {
          caption: 'HumanResources',
          title: 'HumanResources',
          'i-i-s-human-resources-company-l': {
            caption: 'Company',
            title: ''
          },
          'i-i-s-human-resources-person-position-l': {
            caption: 'Person position',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-human-resources-company-l': IISHumanResourcesCompanyLForm,
    'i-i-s-human-resources-person-position-l': IISHumanResourcesPersonPositionLForm,
    'i-i-s-human-resources-company-e': IISHumanResourcesCompanyEForm,
    'i-i-s-human-resources-person-position-e': IISHumanResourcesPersonPositionEForm
  },

});

export default translations;
