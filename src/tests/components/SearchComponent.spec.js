import {mount} from "@vue/test-utils";
import SearchComponent from '../../components/SearchComponent.vue';

const wrapper = mount(SearchComponent);

it("snapshot UI testing of SearchComponent.vue", async () => {
    expect(wrapper.text()).toMatchSnapshot()
});

it("Render Heading Search by Name", async () => {
    const text = wrapper.find('p')
    expect(text.text()).toContain('Search By Name')
});


