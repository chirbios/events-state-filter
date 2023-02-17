import './Toolbar.css';
export default function Toolbar(props) {
  return (
    <div className="toolbar">
      {props.filters.map((filter) => {
        const className =
        filter === props.selected ? 'toolbar-item selected' : 'toolbar-item';
        return(
          <button key={filter} className={className} onClick={() => props.onSelectFilter(filter)}>{filter}</button>
        )
      })}
    </div>
  )
}