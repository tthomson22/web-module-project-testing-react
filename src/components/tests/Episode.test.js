import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Episode from './../Episode';

const sampleEpisode = {
    id: 1,
    name: "",
    image: "https://static.tvmaze.com/uploads/images/medium_landscape/342/855788.jpg",
    season: 1,
    number: 1,
    summary: "test summary",
    runtime: 1,
}

const episodeWithNoImage = {
    id: 1,
    name: "",
    image: null,
    season: 1,
    number: 1,
    summary: "test summary",
    runtime: 1,
}

test("renders without error", () => {
    render(<Episode episode={sampleEpisode}/>)
});

test("renders the summary test passed as prop", () => {
    render(<Episode episode={sampleEpisode}/>)
    const testSummary = screen.queryByText(/test summary/i)
    expect(testSummary).toBeInTheDocument()
    expect(testSummary).toBeTruthy()
    expect(testSummary).toHaveTextContent('test summary')
});

test("renders default image when image is not defined", () => {
    render(<Episode episode={episodeWithNoImage} />);
    const image = screen.queryByAltText("https://i.ibb.co/2FsfXqM/stranger-things.png");
    expect(image).toBeInTheDocument();
});
