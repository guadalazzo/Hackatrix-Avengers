import styled from 'styled-components';

const Container = styled.div`
  width: 560px;

  height: 100vh;
  position: relative;
  padding: 90px 53px 0 80px;

  .info {
    z-index: 2;
    color: white;

    .title {
      display: flex;
      flex-direction: row;
      align-items: center;
      border-bottom: 1px solid white;

      svg {
        font-size: 32px;
      }

      h2 {
        font-size: 48px;
        letter-spacing: 3px;
        margin-left: 12px;
        text-transform: uppercase;
      }
    }

    .filters {
    }
  }

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: -1;
  }
`;

export { Container };
