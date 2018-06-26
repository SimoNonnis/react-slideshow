import React, { Component, Children } from 'react';
import styled from 'styled-components';

const BulletsWrapper = styled.div`
  text-align: center;
  margin-bottom: 2em;
`;

export class Slideshow extends Component {
  state = {
    total: 0,
    current: 0
  };

  componentDidMount() {
    this.setState({
      total: Children.count(this.props.children)
    });

    this.interval = setInterval(this.showNext, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  showNext = () => {
    const { total, current } = this.state;

    this.setState({
      current: current + 1 === total ? 0 : current + 1
    });
  };

  render() {
    const { children } = this.props;
    const { current, total } = this.state;
    const bullets = Array(total).fill(' ○ ');
    bullets[current] = ' ● ';

    return (
      <div>
        <BulletsWrapper>{bullets}</BulletsWrapper>
        {Children.toArray(children)[current]}
      </div>
    );
  }
}
