import React from 'react';
import './TableViewLayoutStyle.css';

class TableViewCellComponent extends React.Component {

    didCellItemSelectedAtIndex = () => {
      this.props.callBackFromTableView(this.props.atIndex)
    }

    didShareButtonClickedAtIndex = () => {
       this.props.buttonSharedCallBackFromTableView(this.props.atIndex)
    }

    render() {
        return (
            <div>
                <div className="demo-card-wide mdl-card mdl-shadow--2dp" >
                  <div className="mdl-card__title">
                    <a className="mdl-card__title-text" href="http://www.google.com"><b>{this.props.itemValue.title}</b></a>
                  </div>

                  <div className="mdl-card__supporting-text">
                    <img className="image-source" src={this.props.itemValue.mainImageUrl} />
                  </div>

                  <div className="mdl-card__actions mdl-card--border">
                    <a className="targetInfo mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" 
                       style={{color: "#e83e8c"}} onClick={this.didCellItemSelectedAtIndex}>
                         <b>{this.props.itemValue.area}  &nbsp;&nbsp;
                            {this.props.itemValue.infoTags}  &nbsp;&nbsp;
                           ¥{this.props.itemValue.tradePrice}/月 </b>
                    </a>
                  </div>

                  <div className="mdl-card__menu">
                    <a className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect" 
                              onClick={this.didShareButtonClickedAtIndex}>
                      <i className="material-icons">share</i>
                    </a>
                  </div>
                </div>
                <p> </p>
            </div>
        );
    }
}

export default TableViewCellComponent;