import React from 'react'

/**
 * 1. 单一功能原则设计组件
 * 2. 先构建静态版本组件
 * 3. 再添加交互
 * 4. 自上而下编写组件
 * 5. 只保留state的最小合集（找到使用state的组件和其他组件需要的props）
 */

 /**
  * 控制组件
  * state在这里声明
  * FilterCond 和 ProductTable 接受state
  * FilterCond 改变state
  * ProductTable接受state，根据state值过滤table属性
  */
class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      isStock: false
    }
  }
  handleInputChange = (value) => {
    this.setState({
      inputValue: value
    })
  }
  handleCheck = (value) => {
    this.setState({
      isStock: value
    })
  }
  render() {
    return (
      <div>
        <FilterCond
          inputValue={this.state.inputValue}
          checkedValue={this.state.isStock}
          handleInputChange={this.handleInputChange}
          handleCheck={this.handleCheck}
        />
        <ProductTable
          tableData={this.props.data}
          isStock={this.state.isStock}
          filterStr={this.state.inputValue}
        />
      </div>
    )
  }
}

class FilterCond extends React.Component {
  handleChange = (e) => {
    this.props.handleInputChange(e.target.value)
  }
  handleCheck = (e) => {
    this.props.handleCheck(e.target.checked)
  }
  render() {
    return (
      <div>
        <input 
          className=""
          type="text" 
          value={this.props.inputValue}
          onChange={this.handleChange}
        />
        <label>
          <input 
            type="checkbox" 
            checked={this.props.checkedValue}
            onChange={this.handleCheck}
          />
          only show products in stock
        </label>
      </div>
    )
  }
}

class ProductTable extends React.Component {
  render() {
    const tableData = this.props.tableData
    const isStock = this.props.isStock
    const filterStr = this.props.filterStr
    const renderData = []
    let lastCategoryName = ''
    tableData.forEach((item) => {
      if (!item.name.includes(filterStr)) {
        return
      }
      if (isStock && !item.stocked) {
        return
      }
      if (lastCategoryName !== item.category) {
        lastCategoryName = item.category
        renderData.push(
          <tr key={item.category}>
            <th colSpan="2">{item.category}</th>
          </tr>)
      }
      renderData.push(
        <tr key={item.name}>
          <td style={{color: item.stocked ? '' : 'red'}}>
            {item.name}
          </td>
          <td>
            {item.price}
          </td>
        </tr>
      )
    })
    return (
      <div>
        <table>
          <thead>
            <tr><th>Name</th><th>Price</th></tr>
          </thead>
          <tbody>
            {renderData}
          </tbody>
        </table>
      </div>
    )
  }
}
const ProductTableData = [
  { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
  { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
  { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
  { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
  { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
]

export default function FilterableProductTableWapper() {
  return(
    <fieldset>
      <legend>React 哲学</legend>
        <FilterableProductTable data={ProductTableData} />
    </fieldset>
  )
}