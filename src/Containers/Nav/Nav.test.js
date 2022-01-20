import { shallow } from "enzyme";
import Nav from "./Nav";

describe("Nav component test", () => {
    it("should render two nav buttons", () => {
        const wrapper = shallow(<Nav />);
        const navButton = wrapper.find(".navButton");
        expect(navButton).toHaveLength(2);
    });
});