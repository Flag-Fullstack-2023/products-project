import styled from 'styled-components';

const PopupContainer = styled.article`
    .popup {
        position: fixed;
        width: 100vw;
        height: 100vh;
        background-color: rgba(26, 26, 26, 0.5);
        z-index: 2;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;

        &__container {
            padding: 24px;
            max-width: 320px;
            background: white;

            p {
                text-align: center;
            }
        }

        &__close {
            background: transparent;
            border: none;
            margin-left: auto;
            display: block;
        }

        &--error {
            h5 {
                color: red;
            }
        }

        &--success {
            h5 {
                color: green;
            }
        }

        &--warning {
            h5 {
                color: orange;
            }
        }

        &--closed {
            display: none;
        }
    }
`;

export { PopupContainer };
