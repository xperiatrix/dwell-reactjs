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

    installView(element) {
        // constructor({ direction, insets, spacing, itemSize }
        console.log('installView   00')
        const itemSize = new Size(300, 320);
        const layout = new GridLayout({itemSize});
        this.view = new CollectionView(element, layout, this)
    }
 
    uninstallView() {
        if (!this.view) {
            return
        }

        this.view.uninstall((element => {
            // elements were rendered using React, clean up
            ReactDOM.unmountComponentAtNode(element)
        }))
    }
 
    onRef = (element) => {
        if (!element) {
            this.uninstallView()
            return 
        }
        this.installView(element)
    }

    update(items) {
        const oldItems = this.items
        this.items = items

        // can't update if the view isn't installed yet
        if (!this.view) {
            return
        }
        
        const [removed, added, moved] = diff(oldItems, items)
        this.view.changeIndices(removed, added, moved)
    }

    shouldComponentUpdate() {
        return false 
    }

    componentWillReceiveProps(nextProps) {
        // manually update
        this.update(nextProps.datasource)
    }

    componentWillUnmount() {
        this.uninstallView()
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

const identity = (x) => x

function diff(original, target, keyFunction) {

    keyFunction = keyFunction || identity

    const removed = []
    const added = []
    const moved = new Map()

    const originalMap = new Map()
    original.forEach((item, index) => {
        const key = keyFunction(item)
        originalMap.set(key, index)
    })

    const targetMap = new Map()
    target.forEach((item, index) => {
        const key = keyFunction(item)
        targetMap.set(key, index)

        const originalIndex = originalMap.get(key)
        if (originalIndex === undefined) {
            added.push(index)
        }
    })

    original.forEach((item, index) => {
        const key = keyFunction(item)
        const targetIndex = targetMap.get(key)
        if (targetIndex === undefined) {
            removed.push(index)
        } else if (targetIndex !== index) {
            moved.set(index, targetIndex)
        }
    })

    return [removed, added, moved]
}


export default TableViewComponent;
