import React, {Component} from 'react';
import {connect} from 'react-redux';
import {findSearchedCities, closeSearchedCitiesBox} from '../../actionCreators/searchActions';

class SearchInputWithHelperBox extends Component {
    state = {
        value: '',

    };

    onChangeInputHandler = (event) => {
        this.setState({value: event.target.value}, () => {
            this.getSearchedCities();
        });
    };

    getSearchedCities = () => {
        if (this.state.value) {
            this.props.findSearchedCities(this.state.value);
        } else {
            this.props.closeSearchedCitiesBox();
        }
    };

    onFoundedCityClickHandler = (cityName) => {
        this.setState({
            value: cityName
        })
    };

    render() {
        return (
            <div>
                <label>
                    <p>{this.props.label}</p>
                    <input
                        type='text'
                        className="select-field-way-from"
                        value={this.state.value}
                        onChange={(event) => this.onChangeInputHandler(event)}
                    />
                </label>
                <ul>
                        {this.props.foundedCities.map((item) => {
                            return (
                                <li key={item}
                                    onClick={(event) => this.onFoundedCityClickHandler(item)}>
                                    {item}
                                </li>
                            )
                        })}
                </ul>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
        return {
            foundedCities: state.railwayData.foundedCitiesList
        }
};


export default connect(mapStateToProps, {findSearchedCities, closeSearchedCitiesBox})(SearchInputWithHelperBox);