import React from 'react';
import Select from 'react-select';
import MealView from '../MealView';
import './MealViewContainer.scss';

const dayOptions = [
  { label: 'Monday', value: 'Monday' },
  { label: 'Tuesday', value: 'Tuesday' },
  { label: 'Wednesday', value: 'Wednesday' },
  { label: 'Thursday', value: 'Thursday' },
  { label: 'Friday', value: 'Friday' },
  { label: 'Saturday', value: 'Saturday' },
  { label: 'Sunday', value: 'Sunday' },
];

interface Props {
  defaultDay: string;
}

interface State {
  day: string;
}

class MealViewContainer extends React.Component<Props, State> {
  state: State = {
    day: '',
  };

  componentDidMount() {
    this.setState({ day: this.props.defaultDay });
  }

  handleChange = (value: string): void => {
    this.setState({ day: value });
  };

  render() {
    const { defaultDay } = this.props;
    const { day } = this.state;
    return (
      <div className="meal-view-container">
        <div className="meal-view-container-top">
          <h2 className="subtitle">Pick a day and view your meal schedule</h2>
          <Select
            name="day"
            defaultValue={{ value: defaultDay, label: defaultDay }}
            options={dayOptions}
            className="react-select-container"
            classNamePrefix="react-select"
            isSearchable={false}
            onChange={(option: any) => this.handleChange(option.value)}
          />
        </div>
        <MealView day={day} />
      </div>
    );
  }
}
export default MealViewContainer;
