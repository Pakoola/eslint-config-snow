module.exports = {
  extends: ['airbnb-base/legacy', 'prettier'],
  plugins: ['angular', 'prettier'],
  globals: {
    GlideAggregate: true,
    GlideDate: true,
    GlideDateTime: true,
    GlideDuration: true,
    GlideElement: true,
    GlideQueryCondition: true,
    GlideRecord: true,
    GlideRecordSecure: true,
    GlideSchedule: true,
    GlideScopedEvaluator: true,
    GlideSystem: true,
    GlideTableHierarchy: true,
    GlideTime: true,
    GlideUser: true,
    GlideAjax: true,
    gs: true,
    g_form: true,
    current: true,
    angular: true,
    template: true,
    email: true,
    email_action: true,
    target: true,
    import_set: true,
    source: true,
    map: true,
    log: true,
    Class: true,
    AbstractAjaxProcessor: true,
    GlideSysAttachment: true,
    GlideFilter: true,
    sys_email: true,
    Cart: true
  },
  rules: {
    'space-before-function-paren': [2, 'never'],
    'no-use-before-define': [2, {
      variables: false,
      functions: false
    }],
    'no-plusplus': 0,
    'block-scoped-var': 0,
    'vars-on-top': 0,
    'brace-style': [2, "1tbs"],
    'semi': [2, "always"],
    "no-underscore-dangle": [2, {
      "allowAfterThis": true
    }]
  },
};