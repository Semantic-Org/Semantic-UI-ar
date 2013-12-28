(function (undefined) {
  var resources = {
    locales: {
      'ar': {
        'glossary': {
          'Semantic UI': 'سيمانتك يو آي',
          'Semantic': 'سيمانتك',
          'Soon': 'قريبا باللغة العربية',
          'Close Menu': 'إغلاق القائمة',
          'of': 'من',
          'UI': 'واجهة المستخدم',
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
          'Local Docs': 'دليل التنصيب',
          'Button': 'مفتاح (زر)',
          'Divider': 'فاصل',
          'Header': 'ترويسة',
          'Icon': 'أيقونة',
          'Image': 'صورة',
          'Input': 'حقل إدخال',
          'Label': 'علامة',
          'Loader': 'غشاء الإنتظار',
          'Progress': 'شريط الإنجاز',
          'Reveal': 'إظهار',
          'Segment': 'مقطع',
          'Step': 'خطوة',
          'Breadcrumb': 'مسار التنقل',
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
          'Dimmer': 'غشاء معتم',
          'Dropdown': 'قائمة منسدلة',
          'Modal': 'محتوى مقيد',
          'Popup': 'محتوى منبثق',
          'Rating': 'تقييم',
          'Shape': 'شكل',
          'Sidebar': 'شريط جانبى',
          'Transition': 'التحريك و الإنتقال',
          'Form Validation': 'التحقق من صحة النموذج',
          'CSS':'CSS صفحات الأنماط الانسيابية',
          'Javascript': 'جافا سكريبت',
          'Language': 'اللغة',
          'HTML tag': 'وسم HTML',
          'Bootstrap': 'بوتستراب',
          'Title': 'عنوان',
          'Home': 'البداية',
          'Link': 'وصلة',
          'Signed in as': 'تم تسجيل الدخول باسم',
          'User': 'مستخدم',
          'Like': 'أعجبني',
          'Run Code': 'تشغيل الرمز البرمجي',
          'Learn about modules': 'معرفة المزيد عن الوَحَدات',
        },
        'documents':{
          'index':{
            'header':'واجهة المستخدم هي مفردات شبكة الإنترنت.',
            'desc': 'سيمانتك يو آي تزيد فاعلية العمل بين المصممين و المطورين من خلال مفردات ذات دلالة لفظية مشتركة لبناء واجهة المستخدم.',
            'View UI': 'عرض واجهة المستخدم',
            'loseHieroglyphics': 'لا مزيد من التعقيد',
            'loseHieroglyphicsSubheader': 'سيمانتك يو آي تم هيكلتها حول اللغة الطبيعية لجعل عملية التطوير أكثر بديهية.',
            'tagAmbivalent1': 'سيمانتك حرة الوسوم، بمعنى أنه يمكنك استخدام أي ',
            'tagAmbivalent2': 'لبناء عناصر واجهة المستخدم.',
            'CoversationHeader': 'قم بمحادثة مكونات واجهة المستخدم',
            'CoversationSubheader': 'سيمانتك تعطيك مجموعة متنوعة من مكونات واجهة المستخدم، و بطباعة مخرجات تصحيح الأخطاء في نفس الوقت،فإنها تسمح للتعليمات البرمجية يإخباركم ماذايحدث الآن.',
            'OpenConsole': 'قم بفتح أدوات المطورين في المتصفح و توجه إلى شاشة المخرجات',
            'OpenConsoleSubheader': 'سيمانتك توفر لك تتبع لسلوك الجافا سكريبت، بحيث أن المكونات الخاصة تقوم باطلاعك على ما يحدث فور حدوثه. ',


            'GrowingHeader': 'في تزايد كل يوم',
            'GrowingSubheader': 'يتم كل يوم كتابة مكونات واجهة مستخدم جديدة. تابعنا لرؤية المزيد.',
          },
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