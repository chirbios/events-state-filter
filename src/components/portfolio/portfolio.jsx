import React, { Component } from 'react';
import Toolbar from '../toolbar/toolbar';
import ProjectList from '../project-list/project-list';

class Portfolio extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      allFilters: ['All', 'Websites', 'Flayers', 'Business Cards'],
      allProjects: [
        {
          img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg',
          category: 'Business Cards',
        },
        {
          img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg',
          category: 'Websites',
        },
        {
          img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg',
          category: 'Websites',
        },
        {
          img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg',
          category: 'Business Cards',
        },
        {
          img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png',
          category: 'Websites',
        },
        {
          img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg',
          category: 'Websites',
        },
        {
          img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg',
          category: 'Business Cards',
        },
        {
          img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png',
          category: 'Websites',
        },
        {
          img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png',
          category: 'Flayers',
        },
        {
          img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg',
          category: 'Websites',
        },
        {
          img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg',
          category: 'Business Cards',
        },
        {
          img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg',
          category: 'Websites',
        },
        {
          img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg',
          category: 'Websites',
        },
        {
          img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png',
          category: 'Flayers',
        },
      ],
      filteredProjects: [],
      selectedFilter: 'All'
    };
  
  this.handleClick = this.handleClick.bind(this);
  }
  
  UNSAFE_componentWillMount() {
    const { allProjects } = this.state;
    this.setState({ filteredProjects: allProjects });
  }
  
  handleClick = (filter) => {
    console.log('Фильтр: ' + filter);
    const { allProjects, selectedFilter } = this.state;
    if (filter !== 'All') {
      const filteredProjects = allProjects.filter(
        (project) => project.category === filter
      );  
      this.setState({ filteredProjects });
      this.setState({ selectedFilter: filter });
    }
    else {
      this.setState({ filteredProjects: allProjects });
    }
  }
  
  render() {
    return (
      <div className="app">
        <Toolbar filters={this.state.allFilters} onSelectFilter={this.handleClick} selected={this.state.selectedFilter} />
        <ProjectList projects={this.state.filteredProjects} />
      </div>
    );
  }
}

export default Portfolio