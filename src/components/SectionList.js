import React from 'react';
import styled from 'styled-components';

const ScrollView = styled.div`
  over-flow: auto;
  height: 100%;
`;

function SectionList(props) {
  const { data, renderHeader, renderRow } = props;
  let count = 0;
  const sections = data.reduce((viewList, group, index) => {
    viewList.push(renderHeader(index, group.title));
    group.data.forEach((item) => {
      viewList.push(renderRow(count, item));
      count++;
    })
    return viewList;
  }, []);
  return (
    <ScrollView>
      {sections}
    </ScrollView>
  );
}

export default React.memo(SectionList);
