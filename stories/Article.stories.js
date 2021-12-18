import MyPage from "./Article";

export default {
  title: "Example/Article",
  component: MyPage,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyPage },
  template:
    '<my-page :article="article" v-bind="$props" />',
});

export const required = Template.bind({});
