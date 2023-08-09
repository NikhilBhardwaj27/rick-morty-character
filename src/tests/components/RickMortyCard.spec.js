import {mount} from "@vue/test-utils";
import RickMortyCard from '../../components/RickMortyCard.vue';
import moment from 'moment';

const wrapper = mount(RickMortyCard,{
    props: {
        rickMortyCharacter: {
            "id": 1,
            "name": "Rick Sanchez",
            "status": "Alive",
            "species": "Human",
            "type": "",
            "gender": "Male",
            "origin": {
              "name": "Earth (C-137)",
              "url": "https://rickandmortyapi.com/api/location/1"
            },
            "location": {
              "name": "Citadel of Ricks",
              "url": "https://rickandmortyapi.com/api/location/3"
            },
            "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            "url": "https://rickandmortyapi.com/api/character/1",
            "created": "2017-11-04T18:48:46.250Z"
        }
    }
})

it("snapshot UI testing of RickMortyCard.vue", async () => {
    const wrapper = mount(RickMortyCard, {
        props: {
            rickMortyCharacter: {
                "id": 1,
                "name": "Rick Sanchez",
                "status": "Alive",
                "species": "Human",
                "type": "",
                "gender": "Male",
                "origin": {
                  "name": "Earth (C-137)",
                  "url": "https://rickandmortyapi.com/api/location/1"
                },
                "location": {
                  "name": "Citadel of Ricks",
                  "url": "https://rickandmortyapi.com/api/location/3"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                "url": "https://rickandmortyapi.com/api/character/1",
                "created": "2017-11-04T18:48:46.250Z"
            }
        }
      })
    expect(wrapper.text()).toMatchSnapshot()
});


it("Check image of RickMortyCard.vue", async () => {
    expect(wrapper.find('img').exists()).toBe(true)
});


