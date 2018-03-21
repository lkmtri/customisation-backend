export const themeMeta = {
  name: 'Oddle Official Theme',
  author: 'Oddle Frontend Team',
  version: '0.0.1',
  apiVersion: '0.0.1',
  created: new Date()
}

export const themeSettingSchema = [
  {
    name: 'Typography',
    settings: [
      {
        type: 'header',
        content: 'Headings and buttons'
      },
      {
        type: 'text',
        id: 'testing',
        default: 'default value',
        label: 'Some input'
      },
      {
        type: 'select',
        id: 'type_header_family',
        label: 'Heading Font',
        options: [
          { value: 'A', label: 'A', group: '1' },
          { value: 'B', label: 'B', group: '1' },
          { value: 'C', label: 'C', group: '2' },
          { value: 'D', label: 'D', group: '3' },
          { value: 'E', label: 'E', group: '3' }
        ]
      },
      {
        type: 'radio',
        id: 'typoGraphyRadio',
        label: 'Select an option',
        default: ['A'],
        options: [
          { value: 'A', label: 'Option A' },
          { value: 'B', label: 'Option B' },
          { value: 'C', label: 'Option C' }
        ]
      },
      {
        type: 'range',
        id: 'typoGraphyRange',
        label: 'Select a value',
        min: 0,
        max: 55,
        step: 5,
        default: 5,
        unit: 'px'
      },
      {
        type: 'select',
        id: 'typographyHeadingBaseSize',
        label: 'Heading Font Size',
        default: '26px',
        options: [
          {
            'value': '20px',
            'label': '20px'
          },
          {
            'value': '22px',
            'label': '22px'
          },
          {
            'value': '24px',
            'label': '24px'
          },
          {
            'value': '26px',
            'label': '26px'
          },
          {
            'value': '28px',
            'label': '28px'
          },
          {
            'value': '30px',
            'label': '30px'
          },
          {
            'value': '32px',
            'label': '32px'
          },
          {
            'value': '34px',
            'label': '34px'
          },
          {
            'value': '36px',
            'label': '36px'
          }
        ]
      }
    ]
  }
]

export const themeSettingData = {
  color_text: '#3d4246',
  color_body_text: '#788188',
  type_header_family: 'Google_Work+Sans_600_sans',
  type_header_base_size: '26px',
  type_base_family: 'Google_Work+Sans_400_sans',
  type_base_size: '16px'
}

export const sectionSettingSchema = [
  {
    name: 'Header',
    type: 'header',
    settings: [
      {
        type: 'text',
        id: 'logo',
        label: 'Logo',
        default: 'LOGO'
      }
    ],
    blocks: [],
    presets: {}
  },
  {
    name: 'Footer',
    type: 'footer',
    settings: [
      {
        type: 'text',
        id: 'background_color',
        label: 'Background color',
        default: 'white'
      }
    ],
    presets: {}
  },
  {
    name: 'Banner Image',
    type: 'banner_image',
    settings: [
      {
        type: 'text',
        id: 'image',
        label: 'Upload an image'
      }
    ],
    presets: {}
  },
  {
    name: 'Product List',
    category: 'Product',
    type: 'product_list',
    settings: [
      {
        type: 'radio',
        id: 'product_list_mode',
        label: 'Choose list or grid view',
        default: 'grid',
        options: [
          { value: 'grid', label: 'Show products in grid view' },
          { value: 'list', label: 'Show products in list view' }
        ]
      }
    ],
    blocks: [
      {
        type: 'quote',
        name: 'Testimonial',
        settings: [
          {
            type: 'textarea',
            id: 'content',
            label: 'Content',
            default: 'Great quality. Easy to use. Nice UI. Definitely made my life easier.'
          },
          {
            type: 'text',
            id: 'author',
            label: 'Customer name',
            default: 'John Albert'
          }
        ]
      }
    ],
    presets: {
      name: 'Testimonials',
      blocks: {
        quote_1: { type: 'quote' },
        quote_2: { type: 'quote' },
        quote_3: { type: 'quote' }
      },
      blocksOrder: ['quote_1', 'quote_2', 'quote_3']
    }
  },
  {
    name: 'Testimonial',
    type: 'testimonial',
    settings: [
      {
        type: 'text',
        id: 'heading',
        label: 'Heading',
        default: 'Testimonials'
      }
    ],
    blocks: [
      {
        type: 'quote',
        name: 'Testimonial',
        settings: [
          {
            type: 'text',
            id: 'author',
            default: 'Customer\'s name',
            label: 'Customer\'s name'
          },
          {
            type: 'textarea',
            id: 'content',
            default: 'Great product!',
            label: 'Testimonial'
          }
        ]
      }
    ],
    presets: {
      name: 'Testimonial',
      category: 'Customer',
      blocks: [
        { type: 'quote' },
        { type: 'quote' },
        { type: 'quote' }
      ]
    }
  },
  {
    name: 'Promotion',
    type: 'promotion_list',
    settings: [
      {
        type: 'text',
        id: 'heading',
        label: 'Heading',
        default: 'Promotion'
      }
    ],
    blocks: [
      {
        name: 'Promotion Item',
        type: 'promotion',
        settings: [
          {
            type: 'text',
            id: 'title',
            label: 'Title',
            default: ''
          },
          {
            type: 'text',
            id: 'content',
            label: 'Content',
            default: ''
          }
        ]
      }
    ]
  }
]

export const sectionSettingData = {
  sections: {
    header: {
      type: 'header',
      settings: {}
    },
    footer: {
      type: 'footer',
      settings: {}
    },
    productList: {
      type: 'product_list',
      settings: {}
    },
    bannerImage: {
      type: 'banner_image',
      settings: {}
    },
    bannerImage_1: {
      type: 'banner_image',
      settings: {}
    },
    testimonial: {
      type: 'testimonial',
      settings: {
        heading: 'Testimonials'
      },
      blocks: {
        testimonial: {
          id: 'testimonial',
          name: 'Testimonial',
          type: 'quote',
          settings: {
            content: 'Codecademy has nailed down the testimonials section of their website, which they call "Codecademy Stories." They\'ve even included a few customer quotes (along with pictures, names, and locations) right on their homepage above a link to the testimonial page.\nWe love the approachable format and the fact that they chose to feature customers that users can really relate to. When you click into any story, you can read the whole case study in a Q&A format.',
            author: 'John Tan'
          }
        },
        testimonial_1: {
          type: 'quote',
          name: 'Testimonial',
          id: 'testimonial_1',
          settings: {
            content: 'Codecademy has nailed down the testimonials section of their website, which they call "Codecademy Stories." They\'ve even included a few customer quotes (along with pictures, names, and locations) right on their homepage above a link to the testimonial page.\nWe love the approachable format and the fact that they chose to feature customers that users can really relate to. When you click into any story, you can read the whole case study in a Q&A format.',
            author: 'John Tan'
          }
        },
        testimonial_2: {
          id: 'testimonial_2',
          name: 'Testimonial',
          type: 'quote',
          settings: {
            content: 'Codecademy has nailed down the testimonials section of their website, which they call "Codecademy Stories." They\'ve even included a few customer quotes (along with pictures, names, and locations) right on their homepage above a link to the testimonial page.\nWe love the approachable format and the fact that they chose to feature customers that users can really relate to. When you click into any story, you can read the whole case study in a Q&A format.',
            author: 'John Tan'
          }
        }
      },
      blocksOrder: ['testimonial', 'testimonial_1', 'testimonial_2']
    },
    promotion: {
      type: 'promotion_list',
      settings: {
        heading: 'Promotions'
      },
      blocks: {
        promotion: {
          id: 'promotion',
          name: 'Promotion',
          type: 'promotion',
          settings: {
            title: 'Promotion 1',
            content: '50% discount on selected items'
          }
        },
        promotion1: {
          id: 'promotion1',
          name: 'Promotion',
          type: 'promotion',
          settings: {
            title: 'Promotion 1',
            content: '50% discount on selected items'
          }
        },
        promotion2: {
          id: 'promotion2',
          name: 'Promotion',
          type: 'promotion',
          settings: {
            title: 'Promotion 1',
            content: '50% discount on selected items'
          }
        },
        promotion3: {
          id: 'promotion3',
          name: 'Promotion',
          type: 'promotion',
          settings: {
            title: 'Promotion 1',
            content: '50% discount on selected items'
          }
        },
        promotion4: {
          id: 'promotion4',
          name: 'Promotion',
          type: 'promotion',
          settings: {
            title: 'Promotion 1',
            content: '50% discount on selected items'
          }
        }
      },
      blocksOrder: ['promotion', 'promotion1', 'promotion2', 'promotion3', 'promotion4']
    }
  },
  pages: {
    index: ['bannerImage', 'productList', 'testimonial'],
    promotion: ['promotion', 'bannerImage_1']
  }
}
