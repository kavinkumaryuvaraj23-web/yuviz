
import React from 'react'
import './SizeGuide.css'

import heroImg from '../images/stylehub/sizeguide-hero.webp'
import measureImg from '../images/stylehub/inner/how-to-measure.webp'

export default function SizeGuide() {
    return (
        <div className="sizeguide-page">

            <div
                className="sizeguide-hero"
                style={{ backgroundImage: `url(${heroImg})` }}
            >
                <p className="sizeguide-label">STYLE HUB</p>

                <h1>
                    SIZE GUIDE & <br />
                    <span>FIT FINDER</span>
                </h1>

                <p className="sizeguide-description">
                    Find your perfect fit with detailed size charts
                    and measurement guides.
                </p>
            </div>

            <div className="sizeguide-content">

                <h2>FIND YOUR PERFECT SIZE</h2>

                <p>
                    Refer to the general upper-body size chart below
                    to find your suitable clothing size.
                </p>

                <div className="sizeguide-layout">

                    <div className="sizeguide-chart-section">

                        <h3 className="sizeguide-selected">
                            General Size Chart
                        </h3>

                        <div className="sizeguide-table-wrapper">

                            <table className="sizeguide-table">

                                <thead>
                                    <tr>
                                        <th>Size</th>
                                        <th>Chest (in)</th>
                                        <th>Length (in)</th>
                                        <th>Shoulder (in)</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>S</td>
                                        <td>36-38</td>
                                        <td>26</td>
                                        <td>16.5</td>
                                    </tr>

                                    <tr>
                                        <td>M</td>
                                        <td>38-40</td>
                                        <td>27</td>
                                        <td>17</td>
                                    </tr>

                                    <tr>
                                        <td>L</td>
                                        <td>40-42</td>
                                        <td>28</td>
                                        <td>17.5</td>
                                    </tr>

                                    <tr>
                                        <td>XL</td>
                                        <td>42-44</td>
                                        <td>29</td>
                                        <td>18</td>
                                    </tr>

                                    <tr>
                                        <td>XXL</td>
                                        <td>44-46</td>
                                        <td>30</td>
                                        <td>18.5</td>
                                    </tr>
                                </tbody>

                            </table>

                            <p className="sizeguide-note">
                                * Sample upper-body measurements.
                                Actual sizing may vary by product.
                            </p>

                        </div>

                    </div>

                    <div className="sizeguide-measure">

                        <div className="measure-text">

                            <h2>HOW TO MEASURE</h2>

                            <p>
                                Follow these simple steps to find
                                your correct size.
                            </p>

                            <h3>01. Chest</h3>
                            <p>
                                Measure around the fullest part of your chest.
                            </p>

                            <h3>02. Shoulder</h3>
                            <p>
                                Measure from one shoulder edge to the other.
                            </p>

                            <h3>03. Length</h3>
                            <p>
                                Measure from the highest shoulder point
                                down to your desired garment length.
                            </p>

                        </div>

                        <div className="measure-image">
                            <img
                                src={measureImg}
                                alt="How to measure clothing size"
                            />
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}
