import React, { Children } from 'react';
import styles from './Table.module.scss';

class Table extends React.Component {
    constructor(props) {
        super(props)
        let uniqueId = 0;
        let data = [...props.data];
        if (props.keysToDataProps.indexOf("id") === -1)
            data = data.map(element => {
                element.id = uniqueId++;
                return element;
            });
        console.log(data)
        this.state = {
            headers: props.headers,
            data: data,
            keysToDataProps: props.keysToDataProps,
            sortedColumn: -1,
            sortDirection: 1,
            activeFilters: [],
            filters: props.filters
        }
    }

    sortByColumn(index) {
        let key = this.state.keysToDataProps[index];
        this.setState((state) => {
            let sortDirection = state.sortedColumn === index ? -1 * state.sortDirection : 1;
            let data = [...state.data].sort((a, b) => sortDirection * (this.compare(a[key], b[key])));
            return {
                sortedColumn: index,
                sortDirection: sortDirection,
                data: data
            }
        })
    }

    isString(s) {
        return typeof (s) === 'string' || s instanceof String;
    }

    isNumber(s) {
        return typeof (s) === 'number' || s instanceof Number;
    }

    compare(a, b) {
        if (a === null) return b;
        if (b === null) return a;
        if (this.isString(a) && this.isString(b)) return a.localeCompare(b);
        if (this.isNumber(a) && this.isNumber(b)) return a - b;
        if (this.isNumber(a)) return 1;
        if (this.isNumber(b)) return -1;
        return 0;
    }

    meetsFilters(data) {
        let results = this.state.activeFilters.map(filter => filter.fun(data))
        console.log(results)
        return results.indexOf(false) === -1;
    }

    createTHead() {

        let th = this.state.headers.map((header, index) => {
            return (<th key={index} onClick={this.sortByColumn.bind(this, index)}>{header} {this.state.sortedColumn === index ? this.state.sortDirection === 1 ? "▲" : "▼" : null}</th>);
        })
        return (
            <thead>
                <tr>
                    {th}
                </tr>
            </thead>)
    }

    createTBody() {
        let body = this.state.data && this.state.data.map(data => {
            let row = this.state.keysToDataProps.map(key => (
                <td>{data[key]}</td>
            ));
            if (this.meetsFilters(data))
                return (<tr key={data.id}>{row}</tr>);
            else return null;
        })
        return (<tbody>{body}</tbody>);
    }

    createFilters() {
        let filters = this.state.filters.map(filter => {
            return <button className={styles.filter + " " + (this.isFilterActive(filter) ? styles.activeFilter: null)}  onClick={this.toggleFiter.bind(this, filter)}>{filter.desc}</button>
        })
        if (filters.length > 0)
            return (<div className={styles.filtersGroup}>{filters}</div>)
        return null;
    }

    isFilterActive(filter) {
        if (this.state.activeFilters.filter(f => f.id == filter.id).length > 0)
            return true;
        return false;
    }

    toggleFiter(filter) {
        if (this.isFilterActive(filter))
            this.removeFilter(filter.id)
        else
            this.activeFilter(filter)
    }

    activeFilter(filter) {
        this.setState(state => ({
            activeFilters: [...state.activeFilters, filter]
        }))
    }

    removeFilter(filterId) {
        this.setState(state => ({
            activeFilters: state.activeFilters.filter(filter => filter.id !== filterId)
        }))
    }

    render() {
        console.log(this.state.activeFilters)
        return (
            <div>
                {this.createFilters()}
                <table className={styles.table}>
                    {this.createTHead()}
                    {this.createTBody()}
                </table>

            </div>)
    }
}


export default Table;