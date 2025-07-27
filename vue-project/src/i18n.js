import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    nav: {
      services: 'Services',
      about: 'About Us',
      contact: 'Contact',
      projects: 'Projects'
    },
    sec: {
      title: 'Powerful Digital Solutions with E-IBTIKAR',
      head: 'We offer modern, creative solutions that fit our customers current needs',
      but:'Discover our services'
    },
    abt:{
      title:'About Us',
      par: 'We are a company specialized in Software development. The company has expanded to offer comprehensive development, implementation, and technical support for online solutions.',
      aim: 'We aim to grow and create value by becoming global leaders in web and mobile app development and design.',
      prov:'Providing top-tier services to ensure maximum customer satisfaction.'
    },
    ourser:{
      ser:'Services',
      par:'E_IBTIKAR approach is tailored to help you fully leverage our expertise and skilled team to achieve your projects goals efficiently.',
      ecom:'E-commerce development',
      ecomp:' Our company specializes in providing comprehensive, user-friendly eCommerce platforms designed to help businesses thrive in the digital marketplace. We empower retailers, brands, and entrepreneurs to create engaging online stores, manage inventory, process payments securely, and analyze sales data all from a single, intuitive dashboard.',
      lern:'Learn More',

    },
    proj:{
      title:'Discover Our Projects',
      head:'Each member of our team brings extensive experience in their respective fields. Together, they have been instrumental in building our company and driving our success in the media and technology sectors.'
    },
    us:{
      cont:'Contact Us',
      inters:'Interested in working together? Fill out the form and we will reach out to you',
      plac:'Libya'

    }
  },
  ar: {
    nav: {
      services: 'الخدمات',
      about: 'من نحن',
      contact: 'اتصل بنا',
      projects: 'المشاريع'
    },
    sec:{
      title: 'حلول رقمية فعّالة معنا',
      head: ' نُقدم حلولاً إبداعية وحديثة تتناسب مع ذوق عملائنا العصري ',
      but:'اكتشف خدماتنا'
    },
    abt:{
      title:'عنا',
      par: ' نحن شركة متخصصة في تطوير البرمجيات توسعت الشركة لتوفير خط كامل من التطوير والتنفيذ والدعم الفني للحلول عبر الإنترنت',
      aim: 'النمو وخلق القيمة من خلال إرساء الريادة العالمية في تطوير الويب وتطوير وتصميم تطبيقات الهاتف المحمول',
      prov:'تقديم خدمة عالية الجودة من شأنها تعزيز رضا العملاء' 
    },
    ourser:{
      ser:'الخدمات',
      par:'تم تصميم منهجية ابتكار لمساعدتك على الاستفادة القصوى من خبرتنا وفريقنا المتخصص لتحقيق أهداف مشروعك',
      ecom:'تطوير التجارة الإلكترونية',
      ecomp:'تتخصص شركتنا في توفير منصات التجارة الإلكترونية الشاملة وسهلة الاستخدام والمصممة لمساعدة الشركات على النجاح في السوق الرقمية. نحن نمكن تجار التجزئة والعلامات التجارية ورجال الأعمال من إنشاء متاجر إلكترونية جذابة وإدارة المخزون ومعالجة المدفوعات بأمان وتحليل بيانات المبيعات، كل ذلك من لوحة تحكم واحدة سهلة الاستخدام',
      lern:'لرؤية المزيد',

    },
    proj:{
      title:'بعضٌ من مشاريعنا',
      head:'يتمتع كل عضو في فريقنا بخبرة طويلة في المجال المختار. ساعد فريقنا في بناء شركتنا والوصول بنا إلى أماكن بعيدة في عالم الإعلام والتكنولوجيا'
    },
    us:{
      cont:'تواصل معنا',
      inters:'مهتم بالتعاون معنا؟ عبّئ النموذج وسنقوم بالتواصل معك',
      plac:'ليبيا'

    }
  }
}

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('lang') || 'en',
  fallbackLocale: 'en',
  messages
})

export default i18n