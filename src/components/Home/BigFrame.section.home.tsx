"use client";
import React, { useEffect, useState } from 'react'
import { IoIosTrendingUp } from 'react-icons/io'
import IcPng from '@/assets/Potential section/ic_potential.png'
import Image from 'next/image'
import Head from 'next/head';
import Script from 'next/script'; 
import 'chart.js/auto';
import { Line } from 'react-chartjs-2';
interface ChartData {
  labels: number[];
  datasets: Array<{
    label: string;
    backgroundColor: string;
    borderColor: string;
    fill: boolean;
    data: number[];
  }>;
}

const BigFrameSectionHomePage = () => {
  const [initialDeposit, setInitialDeposit] = useState<number>(20);
  const [contributionAmount, setContributionAmount] = useState<number>(20);
  const [investmentTimespan, setInvestmentTimespan] = useState<number>(10);
  const [estimatedReturn, setEstimatedReturn] = useState<number>(0);
  const [futureBalance, setFutureBalance] = useState<number>(0);
  const [totalPrincipal, setTotalPrincipal] = useState<number>(0);
  const [compoundPeriod, setCompoundPeriod] = useState<number>(1);
  const [contributionPeriod, setContributionPeriod] = useState<number>(1);
  const [chartData, setChartData] = useState<ChartData>({ labels: [], datasets: [] });

  useEffect(() => {
    const data:any = calculateChartData();
    setChartData(data.chartData);
    setFutureBalance(data.futureBalance);
    setTotalPrincipal(data.totalPrincipal);
  }, [initialDeposit, contributionAmount, investmentTimespan, estimatedReturn, compoundPeriod, contributionPeriod]);


  const updateValue = (
    value: string,
    setter: React.Dispatch<React.SetStateAction<number>>,
    action: 'add' | 'sub' | 'update',
    step: number = 1,
    min: number = 0,
    max: number = Infinity
  ) => {
    let newValue = parseFloat(value);

    if (isNaN(newValue)) {
      newValue = 0;
    } else {
      if (action === 'add') {
        newValue += step;
      } else if (action === 'sub') {
        newValue -= step;
      }
      newValue = Math.min(Math.max(newValue, min), max);
    }

    setter(newValue);
  };

  const calculateChartData = () => {
    const P = initialDeposit; // Principal
    const r = estimatedReturn / 100; // Annual Interest Rate
    const c = contributionAmount; // Contribution Amount
    const n = compoundPeriod; // Compound Period
    const n2 = contributionPeriod; // Contribution Period
    const t = investmentTimespan; // Investment Time Span
    const currentYear = new Date().getFullYear();

    const labels: number[] = [];
    for (let year = currentYear; year < currentYear + t; year++) {
      labels.push(year);
    }

    const principalDataset = {
      label: 'Total Principal',
      backgroundColor: 'rgba(0, 123, 255, 0.5)',
      borderColor: 'rgb(0, 123, 255)',
      fill: true,
      data: [] as number[],
    };

    const interestDataset = {
      label: 'Total Interest',
      backgroundColor: 'rgba(23, 162, 184, 0.5)',
      borderColor: 'rgb(23, 162, 184)',
      fill: true,
      data: [] as number[],
    };

    let totalPrincipal = 0;
    let balance = 0;

    for (let i = 1; i <= t; i++) {
      let principal = P + c * n2 * i;
      let interest = 0;

      totalPrincipal = principal;

      if (r) {
        const x = Math.pow(1 + r / n, n * i);
        const compoundInterest = P * x;
        const contributionInterest = c * (x - 1) / (r / n2);
        interest = parseFloat((compoundInterest + contributionInterest - principal).toFixed(0));
        balance = parseFloat((compoundInterest + contributionInterest).toFixed(0));
      }

      principalDataset.data.push(principal);
      interestDataset.data.push(interest);
    }
    return {
      chartData: {
        labels,
        datasets: [principalDataset, interestDataset],
      },
      futureBalance: balance,
      totalPrincipal: totalPrincipal,
    };
  }
  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<number>>, value: string) => {
    setter(parseFloat(value.replace(/[^0-9.]/g, '')) || 0);
  };

  const formatCurrency = (value: number) => `$${value.toLocaleString()}`;
  const formatPercentage = (value: number) => `${value.toFixed(2)}%`;




  return (
    <>
    {/* <section className="text-gray-600 body-font py-24">
  <div className="container mx-auto flex px-5 py-5 md:flex-flex flex-col-reverse gap-y-10 justify-between items-center">
    <div className="lg:flex-gflex md:w-1/2 lg:pr-24 md:pr-16 gap-y-4 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <div className="mb-2">
              <Image src={IcPng} width={1000} height={1000} className='w-[60%]' alt='ic_png' />
          </div> 
            <h1 className="font-heading   text-3xl md:text-5xl mb-4 font-medium text-gray-900">
              Descubre cuánto <br className="hidden lg:inline-block" /> podría Crecer tu Dinero
      </h1>
            <p className="mb-8 leading-relaxed">Descubre la magia del interés compuesto. Puedes comprobar tu potencial de inversión y rendimientos ingresando un depósito inicial, el monto de las contribuciones y la frecuencia de las mismas. </p>
      
    </div>
    <div className="  lg:max-w-lg xl:max-w-4xl">
      <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
    </div>
  </div>
</section> */}

        {/* <Head>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
          </Head> */}
        {/* <Script src='https://cdn.jsdelivr.net/npm/chart.js'>

        </Script> */}

        <style>
          {
`
.form-control {
    display: block;
    width: 100%;
    height: calc(1.5em + .75rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}
               
        .color{
            color: #2F288B !important;
        }
        .background{
            background-image: url("Background.png");
             background-position: center; 
              background-repeat: no-repeat;
              background-size: cover; 

              background-color: #fff;

        }
         .background-2{
            background-image: url("ipad.png");
             background-position: center; 
              background-repeat: no-repeat;
              background-size: contain;
              padding: 32px;

        }
        .background-3{
            background-image: url("bg3.png");
             background-position: left; 
              background-repeat: no-repeat;
              background-size: contain;
                  height: 84px;


        }
        .h1{
            color: var(--Color, #000);
                font-family: "Plus Jakarta Sans";
                font-size: 36px;
                font-style: normal;
                font-weight: 800;
                line-height: 150%; /* 54px */
        }
        .p{
            color: #222;
            font-family: "Plus Jakarta Sans";
            font-size: 16.875px;
            font-style: normal;
            font-weight: 400;
            line-height: 30.01px; /* 177.837% */
        }
        .container {
        max-width: 1300px !important;
    }
    .canvas{
        display: block;
    box-sizing: border-box;
    height: 300px;
    width: 840px;
    }
    .comp{
        padding: 12px 10px;
        width: 18%;
    }

    .form-group {
    margin-bottom: 1rem;
}
`
            
          }
        </style>

 <div className="w-full  background">
      <div className="flex">
        <div className="md:w-[30%]">
          <img src="ic_p.png" width="64px" alt="Icon" />
          <h1 className="h1">Descubre cuánto podría Crecer tu Dinero</h1>
          <p className="p">
            Descubre la magia del interés compuesto. Puedes comprobar tu potencial de inversión y rendimientos ingresando un depósito inicial, el monto de las contribuciones y la frecuencia de las mismas.
          </p>
        </div>
        <div className="md:w-[70%] background-2">
          <div className="w-full background-3" style={{ display: 'inline-flex' }}>
            <div className="comp">
              <div>Total Principal</div>
              <div className="h3" id="total_principal">{formatCurrency(initialDeposit + contributionAmount)}</div>
            </div>
            <div className="comp">
              <div>Future Balance</div>
              <div className="h3" id="future_balance">{futureBalance}</div>
            </div>
          </div>
          <div className="w-full">
            {/* <canvas id="myChart" /> */}
            <Line
        data={chartData}
        options={{
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                callback: (value) => `$${value.toLocaleString()}`,
              },
            },
          },
          plugins: {
            tooltip: {
              callbacks: {
                label: (context) => `${context.dataset.label}: $${(context?.raw as any).toLocaleString()}`,
              },
            },
          },
        }}
      />
          </div>
          <div className="w-full" style={{ display: 'inline-flex' }}>
            <div className="md:w-[60%]">
              <div className="form-group">
                <label htmlFor="estimated_return">% Porcentaje de Rendimiento Anual</label>
                <div className="flex">
                  <div className="input-group md:w-[60%] sm:w-[80%]">
                    <input
                      className="form-control text-center"
                      id="estimated_return"
                      type="text"
                      name="estimated_return"
                      min={0}
                      max={50}
                      step="0.25"
                      value={formatPercentage(estimatedReturn)}
                      onChange={(e) => handleInputChange(setEstimatedReturn, e.target.value)}
                      data-append="%"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="initial_deposit">Initial Deposit</label>
                <div className="flex">
                  <div className="input-group md:w-[60%] sm:w-[80%]">
                    <input
                      className="form-control text-center"
                      id="initial_deposit"
                      type="text"
                      name="initial_deposit"
                      min={100}
                      max={1000000}
                      step={100}
                      value={formatCurrency(initialDeposit)}
                      onChange={(e) => handleInputChange(setInitialDeposit, e.target.value)}
                      data-prepend="$"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="form-group">
                <label htmlFor="contribution_amount">Contributions</label>
                <div className="flex">
                  <div className="input-group md:w-1/2 sm:w-[80%]">
                    <input
                      className="form-control text-center"
                      id="contribution_amount"
                      type="text"
                      name="contribution_amount"
                      min={0}
                      max={10000}
                      step={50}
                      value={formatCurrency(contributionAmount)}
                      onChange={(e) => handleInputChange(setContributionAmount, e.target.value)}
                      data-prepend="$"
                    />
                  </div>
                </div>
                <div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      id="contribution_period_monthly"
                      type="radio"
                      name="contribution_period"
                      value={12}
                      checked={contributionPeriod === 12}
                      onChange={() => setContributionPeriod(12)}
                    />
                    <label className="form-check-label" htmlFor="contribution_period_monthly">monthly</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      id="contribution_period_annually"
                      type="radio"
                      name="contribution_period"
                      value={1}
                      checked={contributionPeriod === 1}
                      onChange={() => setContributionPeriod(1)}
                    />
                    <label className="form-check-label" htmlFor="contribution_period_annually">annually</label>
                  </div>
                </div>
              </div>
              <div className="form-group flex">
                <div className="sm:w-full">
                  <div>Compound Frequency</div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      id="compound_period_daily"
                      type="radio"
                      name="compound_period"
                      value={365}
                      checked={compoundPeriod === 365}
                      onChange={() => setCompoundPeriod(365)}
                    />
                    <label className="form-check-label" htmlFor="compound_period_daily">daily</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      id="compound_period_monthly"
                      type="radio"
                      name="compound_period"
                      value={12}
                      checked={compoundPeriod === 12}
                      onChange={() => setCompoundPeriod(12)}
                    />
                    <label className="form-check-label" htmlFor="compound_period_monthly">monthly</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      id="compound_period_annually"
                      type="radio"
                      name="compound_period"
                      value={1}
                      checked={compoundPeriod === 1}
                      onChange={() => setCompoundPeriod(1)}
                    />
                    <label className="form-check-label" htmlFor="compound_period_annually">annually</label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="investment_timespan">Investment Time Span</label>
                <div className="flex">
                  <div className="md:w-1/2 sm:w-[80%]">
                    <input
                      className="form-control"
                      id="investment_timespan"
                      type="range"
                      name="investment_timespan"
                      min={2}
                      max={50}
                      step={1}
                      value={investmentTimespan}
                      onChange={(e) => setInvestmentTimespan(parseInt(e.target.value))}
                    />
                  </div>
                </div>
                <span id="investment_timespan_text">{investmentTimespan} years</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    
    
    </>
  )
}

export default BigFrameSectionHomePage ;