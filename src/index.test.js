import { shallow } from "enzyme";
import { SeasonDisplay } from "./components/SeasonDisplay";

describe("Test SeasonDisplay", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<SeasonDisplay />);
    expect(wrapper).toMatchSnapshot();
  });
});
