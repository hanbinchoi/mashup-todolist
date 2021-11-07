import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-botton: 48px;
  overflow-y: auto;
`;

function TodoList() {
  return (
    <TodoListBlock>
      <TodoItem text="프로젝트 생성하기" done={true} />
      <TodoItem text="컴포넌트 스타일링" done={true} />
      <TodoItem text="프로젝트 버리기" done={false} />
      <TodoItem text="롤하기" done={true} />
      <TodoItem text="왤케빨라" done={false} />
    </TodoListBlock>
  );
}
export default TodoList;
