import React from 'react';

class LoadingDots extends React.Component {
  constructor(props) {
    super(props);

    this.state = { frame: 1 };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        frame: this.state.frame + 1
      });
    }, this.props.interval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let dots = this.state.frame % (this.props.dots + 1);
    let text = 'Loading';
    while (dots > 0) {
      text += '.';
      dots--;
    }
    return (
      <span className="label label-primary" {...this.props}>
        {text}&nbsp;
      </span>
    );
  }
}

LoadingDots.defaultProps = {
  interval: 300,
  dots: 3
};

export default LoadingDots;
