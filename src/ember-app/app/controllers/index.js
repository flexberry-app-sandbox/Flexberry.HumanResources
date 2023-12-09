import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.human-resources.caption'),
          title: i18n.t('forms.application.sitemap.human-resources.title'),
          children: [{
            link: 'i-i-s-human-resources-company-l',
            caption: i18n.t('forms.application.sitemap.human-resources.i-i-s-human-resources-company-l.caption'),
            title: i18n.t('forms.application.sitemap.human-resources.i-i-s-human-resources-company-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-human-resources-person-position-l',
            caption: i18n.t('forms.application.sitemap.human-resources.i-i-s-human-resources-person-position-l.caption'),
            title: i18n.t('forms.application.sitemap.human-resources.i-i-s-human-resources-person-position-l.title'),
            icon: 'chart line',
            children: null
          }]
        }
      ]
    };
  }),
})