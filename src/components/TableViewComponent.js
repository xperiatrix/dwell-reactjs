import React from 'react';
import ReactDOM from 'react-dom';
import PageStyle from './TableViewLayoutStyle.css';
import TableViewCellComponent from './TableViewCellComponent';
import { CollectionView, GridLayout, Size } from '../libs/collectionview';

class TableViewComponent extends React.Component {
    constructor(props) {
        super(props) 
        this.items = this.props.datasource
    }

    tableViewCellDidSelectedCallback = (atIndex) => {
       console.log(atIndex + 'tableViewCellDidSelectedCallback')
    }

    tableViewCellShareButtonClickedCallback = (atIndex) => {
        console.log(atIndex + 'tableViewCellShareButtonClickedCallback')
    }

    onRef = (element) => {
        if (!element) {
            return 
        }
        this.installView(element)
    }
 
    uninstallView() {
        if (!this.view) {
          return
        }
    }
 
    installView(element) {
        // constructor({ direction, insets, spacing, itemSize }
        const itemSize = new Size(300, 320);
        const layout = new GridLayout({itemSize});
        this.view = new CollectionView(element, layout, this)
    }

    shouldComponentUpdate() {
        return false
    }

     /**
      * UICollectionViewDataSource / UICollectionViewDelegate(Interactions)
      */
    getCount() {
        return this.items.length
    }
 
    configureElement(element, index) {
        element.classList.add(PageStyle.box)
        let item = this.items[index]
        ReactDOM.render(<TableViewCellComponent itemValue={item}
                                                atIndex={index}
                                                selectedCallBackFromTableView={this.tableViewCellDidSelectedCallback}
                                                buttonSharedCallBackFromTableView={this.tableViewCellShareButtonClickedCallback} />,
                        element)
    }          
         
    render() {
        return (
            <div>
                <div ref={this.onRef}>
                </div>
            </div>
        );
    }
}

export default TableViewComponent;
