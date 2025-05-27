import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props
  const { background } = config;
  return (
    <button data-testid={config.key} className={/* classname should come here */ config.classname} onClick={() => selectNextBackground({background: background})}>
      {/* label should come here */}{config.label}
    </button>
  )
}
export default ColourSelector;
