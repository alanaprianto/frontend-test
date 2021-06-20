import React, { useState, useEffect } from "react";
import { useHistory, RouteComponentProps } from "react-router-dom";
import {
  Container,
  DetailDiv,
  H2Title,
  TableStyled,
  ButtonStyled,
} from "./style";

function Detail({ match }: RouteComponentProps<{ id: string }>) {
  const history = useHistory();
  const [response, setResponse] = useState<{ [key: string]: any }>({});
  const {
    params: { id },
  } = match;


  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://swapi.dev/api/planets/${id}`);
      const data = await res.json();
      setResponse(data);
    };

    fetchData();
  }, []);

  const dateFormated = (dateProps: string) => {
    let formated = "";
    if (dateProps) {
      const date = new Date(dateProps);
      formated += date.toLocaleString("id-ID", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
      formated += " ";
      formated += date.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false,
      });
    }
    return formated;
  };

  return (
    <Container>
      <DetailDiv>
        <H2Title>{response.name}</H2Title>
        <hr />
        <TableStyled>
          <tbody>
            <tr>
              <td width="30%">Diameter</td>
              <td width="1%">:</td>
              <td width="69%">{response.diameter}</td>
            </tr>
            <tr>
              <td width="30%">Orbital Period</td>
              <td width="1%">:</td>
              <td width="69%">{response.orbital_period}</td>
            </tr>
            <tr>
              <td width="30%">Population</td>
              <td width="1%">:</td>
              <td width="69%">{response.population}</td>
            </tr>
            <tr>
              <td width="30%">Gravity</td>
              <td width="1%">:</td>
              <td width="69%">{response.gravity}</td>
            </tr>
            <tr>
              <td width="30%">Climate</td>
              <td width="1%">:</td>
              <td width="69%">{response.climate}</td>
            </tr>
            <tr>
              <td width="30%">Rotation Period</td>
              <td width="1%">:</td>
              <td width="69%">{response.rotation_period}</td>
            </tr>
            <tr>
              <td width="30%">Surface Water</td>
              <td width="1%">:</td>
              <td width="69%">{response.surface_water}</td>
            </tr>
            <tr>
              <td width="30%">Terrain</td>
              <td width="1%">:</td>
              <td width="69%">{response.terrain}</td>
            </tr>
            <tr>
              <td width="30%">Url</td>
              <td width="1%">:</td>
              <td width="69%">{response.url}</td>
            </tr>
            <tr>
              <td width="30%">Created</td>
              <td width="1%">:</td>
              <td width="69%">{dateFormated(response.created)}</td>
            </tr>
            <tr>
              <td width="30%">Edited</td>
              <td width="1%">:</td>
              <td width="69%">{dateFormated(response.edited)}</td>
            </tr>
          </tbody>
        </TableStyled>
        <ButtonStyled onClick={() => history.goBack()}>Back</ButtonStyled>
      </DetailDiv>
    </Container>
  );
}

export default Detail;
