import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Human resources',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Human resources',
          title: 'Human resources'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-human-resources-company-l': IISHumanResourcesCompanyLForm,
    'i-i-s-human-resources-person-position-l': IISHumanResourcesPersonPositionLForm,
    'i-i-s-human-resources-company-e': IISHumanResourcesCompanyEForm,
    'i-i-s-human-resources-person-position-e': IISHumanResourcesPersonPositionEForm
  },

});

export default translations;
