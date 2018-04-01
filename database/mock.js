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

export const themeSettingData = {}

export const sectionSettingSchema = []

export const sectionSettingData = {
  sections: {},
  pages: {
    index: []
  }
}
