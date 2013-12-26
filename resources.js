(function (undefined) {
  var resources = {
    locales: {
      'ar': {
        'glossary': {
          'sui': 'سيمانتك يو آي',
          'soon':'قريبا باللغة العربية',
          'introduction': 'المقدمة',
          'project':'المشروع',
          'download': 'تحميل',
          'compressed': 'مضغوط',
          'uncompressed': 'غير مضغوظ',
          'definition': 'التعريف',
          'defintionMode': 'وضع التعريف',
          'designerMode': 'وضع التصميم',
          'developerMode': 'وضع التطوير',
          'elements': 'العناصر',
          'collections': 'المجموعات',
          'views': 'طرق العرض',
          'modules': 'الوَحَدات',
          'behavior': 'التصرفات',
          'content': 'المحتوى',
          'formValidation': 'التحقق من صحة النموذج',

        },
        'partials': {
          'header': {
            'learn': 'معرفة المزيد عن الوَحَدات',
          },
        },
        'layouts': {
          'default': {
            'closeMenu': 'إغلاق القائمة',
            'styleGuide': 'دليل التنسيق',
            'specification': 'مواصفة',
          }
        }
      },
      'en': {
        'glossary': {
          'sui': 'Semantic UI',
          'soon':'Soon',
          'introduction': 'Introduction',
          'project':'Project',
          'download': 'Download',
          'compressed': 'Compressed',
          'uncompressed': 'Uncompressed',
          'definition': 'Definition',
          'defintionMode': 'Definition Mode',
          'designerMode': 'Designer Mode',
          'developerMode': 'Developer Mode',
          'elements': 'Elements',
          'collections': 'Collections',
          'views': 'Views',
          'modules': 'Modules',
          'behavior': 'Behavior',
          'content': 'Content',
          'formValidation': 'Form Validation',
        },
        'partials': {
          'header': {
            'learn': 'Learn about Modules',
          },
        },
        'layouts': {
          'default': {
            'closeMenu': 'Close Menu',
            'styleGuide': 'Style Guide',
            'specification': 'Specification',

          }
        }
      }
    },
    translate: function (locale, path) {
      var value = resources.locales[locale],
           path = path.split('.')
      ;
      if (path.length == 1)
        value = value['glossary'][path[0].toLowerCase()];
      else
        while (value && path.length)
          value = value[path.shift().toLowerCase()];

      return value || path;
    }
  }
  module.exports = resources;
  return resources;
}).call(this);