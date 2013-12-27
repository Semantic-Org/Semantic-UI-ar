(function (undefined) {
  var resources = {
    locales: {
      'ar': {
        'glossary': {
          'Semantic UI': 'سيمانتك يو آي',
          'Soon': 'قريبا باللغة العربية',
          'Close Menu': 'إغلاق القائمة',
          'Introduction': 'المقدمة',
          'Project':'المشروع',
          'Download': 'تنزيل',
          'Compressed': 'مضغوط',
          'Uncompressed': 'غير مضغوظ',
          'Definition': 'التعريف',
          'Defintion Mode': 'وضع التعريف',
          'Designer Mode': 'وضع التصميم',
          'Developer Mode': 'وضع التطوير',
          'Elements': 'العناصر',
          'Collections': 'المجموعات',
          'Views': 'وسائل العرض',
          'Modules': 'الوَحَدات',
          'Behavior': 'التصرفات',
          'Style Guide': 'دليل التنسيق',
          'Specification':'المواصفات',
          'Content': 'المحتوى',
          'Definitions': 'التعريفات',
          'Overview': 'نظرة عامة',
          'Types': 'الأنواع',
          'Variations': 'التغيرات',
          "What's Different": 'ما الفرق',
          'Contributing': 'ساهم معنا',
          'Local Docs': 'دليل التشغيل',
          'Button': 'مفتاح (زر)',
          'Divider': 'فاصل',
          'Header': 'ترويسة',
          'Icon': 'أيقونة',
          'Image': 'صورة',
          'Input': 'حقل إدخال',
          'Label': 'علامة',
          'Loader': 'قطاع الإنتظار',
          'Progress': 'شريط الإنجاز',
          'Reveal': 'قناع',
          'Segment': 'مقطع',
          'Step': 'خطوة',
          'Breadcrumb': 'مسار',
          'Form': 'نموذج',
          'Grid': 'شبكة',
          'Menu': 'قائمة',
          'Message': 'رسالة',
          'Table': 'جدول',
          'Comment': 'تعقيب',
          'Feed': 'تغذية',
          'Item': 'بند',
          'List': 'لائحة',
          'Accordion': 'أكورديون',
          'Checkbox': 'مربع اختيار',
          'Dimmer': 'قطاع التعتيم',
          'Dropdown': 'قائمة منسدلة',
          'Modal': 'نافذة مقيدة',
          'Popup': 'نافذة منبثقة',
          'Rating': 'تقييم',
          'Shape': 'شكل',
          'Sidebar': 'شريط جانبى',
          'Transition': 'التحريك و الإنتقال',
          'Form Validation': 'التحقق من صحة النموذج',
          'CSS':'CSS صفحات الأنماط الانسيابية',
          'Javascript': 'جافا سكريبت',
          'Language': 'اللغة',


        },
        'partials': {
          'header': {
            'learn': 'معرفة المزيد عن الوَحَدات',
          },
        },
      },
    },
    translate: function (locale, path) {
      var value = resources.locales[locale],
           path = path.split('.')
      ;
      if (path.length == 1)
        value = value['glossary'][path[0]];
      else
        while (value && path.length)
          value = value[path.shift()];

      return value || path;
    }
  }
  module.exports = resources;
  return resources;
}).call(this);