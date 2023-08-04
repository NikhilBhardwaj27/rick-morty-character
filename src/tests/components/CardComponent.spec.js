import {mount} from "@vue/test-utils";
import CardComponent from '../../components/CardComponent.vue';


it("snapshot UI testing of CardComponent.vue", async () => {
    const wrapper = mount(CardComponent);
    expect(wrapper.text()).toMatchSnapshot()
});