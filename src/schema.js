const objectSchema = {
  title: {
    selector: ""
  },
  fullName: {
    selector: 'div[data-qa="bloko-tag bloko-tag_inline"]'
  },
  gender: {},
  age: {},
  photo: {},
  salary: {},
  area: {},
  relocation: {},
  contacts: {},
  skills: {},
  skillsSet: {},
  specialization: {},
  education: {},
  driverLicenseTypes: {},
  professionalRoles: {},
  languages: {},
  employments: {},
  schedules: {},
  experience: {},
  total_experience: {},
  citizenship: {},
  certificate: {}
};

const schema = [
  {
    key: 'title',
    type: 1,
    selector: 'span[data-qa="resume-block-title-position"]'
  },
  {
    key: 'fullName',
    type: 1,
    selector: 'h2[data-qa="resume-personal-name"]'
  },
  {
    key: 'age',
    type: 1,
    selector: 'span[data-qa="resume-personal-age"]'
  },
  {
    key: 'gender',
    type: 1,
    selector: 'span[data-qa="resume-personal-gender"]'
  },
  {
    key: 'keySkills',
    type: 2,
    selector: 'div[class="bloko-tag-list"]'
  }
];

module.exports = {schema};
