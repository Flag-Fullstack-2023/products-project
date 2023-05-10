import styled from "styled-components";


const FilterMenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    padding: 3px 0 0 10px;
    row-gap: 10px;

    .menu{

        &__close{
            text-align: right;
            
        }
    }
`;

export { FilterMenuContainer };
