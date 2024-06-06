const DiscountIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 32 32"
    >
      <path fill="url(#pattern0_2_354)" d="M0 0H32V32H0z"></path>
      <defs>
        <pattern
          id="pattern0_2_354"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use transform="scale(.00195)" xlinkHref="#image0_2_354"></use>
        </pattern>
        <image
          id="image0_2_354"
          width="512"
          height="512"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAQAAABecRxxAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfkAxEUIRkd3w+RAAAl8UlEQVR42u3daYAdVYH28ac7+9ZJCAkgWwgJi8CwL4NgiODghowKKLKpLOM4o9FBwRf1nbwjEGQ1giCDzotBR1FxgKCiJqyCILtAQhYIkCDZyJ7OnjsfmpB05957zqk6VadO1f9X35LbVaeq+nmq7u26VS0CEINddLT20j7aU8PUX/3UUyu1Uqs0WzM1Q8/oCa0PPUQAvvXQSfpPzVDNMK3SZF2s3UMPF4AvB+p6LTRGf+tpkx7SeeodeuAA0jlGk7TJKfxbpvkap8GhVwBAMvtqcsLob5ne0ufVGnpFALjppyu0LnX8O6YndUTo1QFg7916wVP4O6b1Gsd5ABCHf9Jqr/HvmP6gYaFXDEBzLbomg/B3TK9or9CrB6CxnvpZZvGvqaZ5OiT0KgKor6d+l2n8a6ppGRUAFFGLfpx5/GuqaYH2Dr2qALr6bi7xr6mml/k4ECiWS3KLf0013aduoVcYwGZnJb7cN+l0SehVBtDhJK3POf41rdeRWwbQEnoLAJV1hB5QH+efWqPpmq1lWquBGqpR2tV5Dk/rCG0MvfJAte2mNx2P3a/qMr1HPbrMZyedobsdvz3wz6FXHqi2AXrWKbJP6mNNr+nfRddpjfXc3lJb6A0AVFc3TXII/xKdb/WFnlEOXyK+OPQmAKrrWof4/0V7WM+3Vd/QRqu5vsldg4AwLnCI/z3q6zj307XWas7nh94MQBWNdvjA7rfbfORn43Srs4CHQm8IoHra9Kp1/P+sfgmX8k2LuW/SbqE3BlA1X7WO/1QNSbyUVk2xWMLXQm8MoGqet4z/nAQX+GxtlMUfBf8YemMA1dJm+Rn9Uu2XelnXGZeySj1DbxCgSkZZxX+9TvSwrF0tPmw8mvuFAvnZYPWqsfq9h2XN0b3G13CPICBH3bTKeFSe4G1pZ+W4LAAWfmOI5G883rBjZ2MB/Cb05gCq5cNNA/lXDfC6tDmGAngx9OYAqubXDeP4pveHe99n/GMjgFwN1lN1w7hQB3lf1n8bCmBJ6I0BVM9g/XybKD6pfTNY0i2GAlgXelMA1XScbtcC1VTTCk3WmeqeyVJuNRRAe+jNAFTZQA3O9Nm9dxoKYH42vQPAxrKM57+naflcCQiUVU+NNLxiMQUAlNVRxtt+zaAAgLL6oPEVFABQUq36tPE1L4UeJIBsfMLii8c7hx4kgCy06hlj/Kcro8sPUH59tJdGaZQGaZD6q6/6a2Cmf9EuqpVar1Vaojmap9c0TbNVCz0kSdIFFhcW308BwM0QHavjtL9GaVceLFvXKk3TY3pYD2lewFHsqSssXjWJpwPDTpuO13E6TvtX8iifzIu6W3fqiQBnBH31kA41vmqhdtb6EBsGMempj+p2tVt8oMRUb5qjSzUi1z3WQ/dYjex7oX+1UHRH60YtCh6h+KdNmqIP53S2PUD3Wo7pwNC/XiiuFp2sPwcPTrmm53W2x9t91bdjg3sNbDtxMzA00KpT9ULwuJRzmqZTM9xzIzXTeiTHhP41QxG16nOaHTwm5Z4e0P6Z7Lt/0FvWY/Bx23GUznF6Ong8qjCt06XGr+m4adFF2mC9/LXaO/SvGopmiG7VpuDRqM70ksUf6mz1q3OLsWbT+NC/bCiaU9++PRVTftNaXejlLwMj9JzTcqclfug4SqlNE4OHoarT3amfA3Ciwzv/mmpq19+F/oVDkRyiV4LHoMrTCykuE2rVNx3e+XdMF4T+hUORfEarg0eg6tMiHZlo3w3TH5yXdX3oXzgUR4uuDP7Lz1RTTSv0Pue9N1pvOC/ndr7Jgc166MfBf/GZNk+r9WGHfdeqbzif+td0r3ptOyu+DVhNffULp1+55papXe1aGnqlguij3trBw+fqa/Qh3W/1yqG6TSc6z/8nOpfnAKHDdno05RFrnR7R9fpXnag9Mr++PQZtOlCna7we0prE23S5jrBY0ns1N8G8v8OhHpsNS3Wl/5O6TO/nL8kN9dEHdYsWJtq2C7VH03m36hKtd57rRn0x9EZBcSSP/yv6tvYJPfxI9NRpmpxgG/+1yXUBuxgf9l3/04VTQm8MFEfS+N+rMZxEOjtUdzhfXn1ng+38cccLfjqmOVZvK1ARw/R8ghPISfwSpXCYHnbc4l/eZh59NCFRbf9JO4ZefRRHkqP/Q1w4mlqLLtBSh22+Rgd3+vlD9VKi+N+gHqFXHcXhHv83dRan/Z7sogcdtvy0d74s3KqvaW2C8K/WZ0KvMorEPf4TNTD0oEuluy53+DzgPyRJOyf6ILGm13V46NVFkbi+92/X2NBDLqVTre+uvFbv1j8mvCHrw7zzx9Zcj/5/1b6hh1xax2mF5V6Ylyj8m3Ql7/yxNdf4/zH1N9TRzHu0PFG0baaF+lDo1UOxuJ78/9rzveqwrdEpLhduNj2m4aFXDcXievS/ga+L5uJ073df3KhLec4nOnM9+l8TesAVcoXX+C/QB0KvEIrG9eh/VegBV0o33e8t/lO0U+jVQdFw9C+6nbXYQ/g36Qq+jo2uOPrH4NzU8Z+rMaFXAsXD0T8OLSkfv3qHhoReBRQPR/94nJI4/Mv12dCDRxFx9I9Fqy6wviqw6/S4RoUePoqI+Mfi7/R4wvCv1xVc7It6iH8cemtcoq/41lTTbB0TevgoJuIfh2M0LfE7/4l8TwP1Ef8YDNQEbUwY/iX6dOjho6iIfww+otcTH/sna5fQw0dR8Ye/4ttRv0wc/pqmcms2NMLRv/hOTXhvn83T0uyGRrPEbZju034Or79aXws95AJp0a4aqeEaqD5q0zqt0lIt0kzNUru3Zeypm3V86rnspHkhNxSKiZP/ZPrrQxqvR7S64Zaardt0furLbbrra1qV6ti/eXpv6E2G4uHk310vnaSJDlfgvahxGplwWYfpCS/hr6mm80JvOBQNR39X2+mbmp8gfBt1l97juKwh+qHXu/6MD73xUCzE381AXZX4yvuO6U/W1+C16HMJnw7ceLox9AZEkXDy76JFZye8yXbXaZJ2My5t74QP82g+3RZ6I6I4OPq72E0PeQzi8qaP3OqvK7Uug/jXdGfozYii4Ojv4uRED9VuPv1Sg+ou6yS9lkn4a6ppSugNiWLg6G+vxfO9d7dM0zWiy7IO0AMp5tdufHrwX0JvTBQBR3973XRLZsfjmubpkHeWNEhXJP56b001Pah99JjhNU+F3pwIj6O/vV66J8P411TTMo2W1KLPpvqAcZHOUYtEAcCE+NvrluqrN7bTCn025W09b9PQt0dMAaApTv5dTMgh/mmnV3TiViOmANAER38XXw0ebtO0Xleob6cxUwBoiKO/i8NTfSCXx/S0Dttm1BQAGiD+LvprRvCAN5tW6eK6j/KiAFAXJ/9u/jN4xJtNd2nXBuMOVgA8U7zIuN2Hm8N0ruNPPKX79bhmaZ7WqreGaCcdqffoWPXzPra5+rLuCL2BEBOO/m7cnrW3ROMbftN/gD6vZzwe+dfpO+rfdOy8BUAXxN/Vxx0CebUGGuf3Kc31Ev/J2se4LAoAnRB/d6YQbZ5mbHUZb3PHpb6h1xyd5mXsFEClEH93o62Px3ZP19lXv0p5Tx/zif8WFADeQfyTsLv49271tJjXcN2qDSmP/TYn/ltQAHgb8U+irckdfrdMj6iPcU476vrUlxLZnvhvQQFAEpf9JPUZi221QO8yzGU7jdPylOFfpwkJHuFJAUAc/ZObZLG1Tmk6h/76hpakDH9Nk7VvovFTACD+iXUz3lGnpslNfr6Xxia6YXjX6buJ14ACqDzin9zBFtur0U29u+lcb/fy+2HiNaAAKo74p/El4/ZqdE+9A/Wkp/CniykFUGnEP52bjFtsbN2fO0bLPMa/pjVWf2SshwKoMOKflvlRHHvU+akdvT+/p6aDEq4BBVBZxD+9Vw3bbE7dn5roPf41fTjhGgQrgNY89g8a4gu/Puxg+P/n6/zbMH0yg5EMCr0pXFEAIRF/H7qrt+EVs+v825jE79ebGRx6Y7iiAMIh/n6Yv3CzrM6/uWx5exQALBF/X3oYX7Guzr+Zzhq29ZLOM76mV+iN4YoCCIP4+7PK+Ip6N/h602kZr+lzOkC/Nb5umcW8CoV7AoZA/H1arU2GA9mOdf7tSev5z9flullrJe1kfO3S0BsDxccf/nwzfRPgz3V+pkWvWGz7xbpkq/OH04yvPzXhGnAdQGUQf/+eNWzD1XXfm59r+KmVuqzLh3rXGPfW8QnXgAKoCOKfBfPdgMbU+akW/U/D16/RhDpXFzxjXM7OCdeAAqgE4p+Ny41b8qa6P9enbgWs139p9zqvHmVcyvzEa0ABVADxz8onjNtycYO79LToPL3e6c3CTxvey+9K41LuTbwGFEDpEf/sDLO4f++FDX+6m0brYl2lb+pTTS7lHWzxzcHxideAAig54p+tqcYt+paGpFrCdRZ77QOJ504BlBrxz9p3LbbqrSnmf6jWWVSM+ZrERiiAEiP+2TvSasuekXDubZppMff/SjF+CqC0uNF3PmZYbNvVem+COffQ7632XPI3ABRAaXH0z8u3rLbvEh3rON8+utNqzvNSfb2YAigl4p+f7S0f5LlaZzrMdWc9Yrnv/j3V6CmAEiL++breekvfavkXgdOs7xq4UsNSjZ0CKB3in7fhWmO9td/ShYYHeL1X9zvsvStSjp0CKBniH8KlTtt8iW7S++rcGGSEvqwnnOb0lrZLOfJgBdCS9T6pJL7vH0Y/TdOujj+zRs9ppv6mleqjNu2p/bWL83Iv0C0pR/6Yjmz6/0/rUL+bCtnh6B/Ox5y2vJ/pIQ/31eItQGnwd/+wfpBz/JdquIdRUwAlwdE/tD6OBZxu2qTTvIyaAigF4l8E+2hRbgVwuacxUwAlQPyL4u8tLwpKO93u7a7aFED0iH+RfETrM4//vR6fLUQBRI6P/orm/VqRafzvVB+Po6UAokb8i+iIDB7/vXn6kecnalAAEePkv6j2yeQvAuv0b95HSgFEi6N/kfXWBM/xf1VHZzBOCiBSHP2L72Od7vubZtqomzUwkzFSAFHi6B+Hvhqn1anj/4SOymyEFECEOPrHZHd9L8XVAX/WxzL94hwFEB3iH5/t9S2r23tuPbXrF4nuJOiGAogM8Y/X4bpGL1g8SmSx7tRZhtuG+ML9AKLC9/3jN1TH6jCN1CjtutUNwlZrvmZppqbqYT2vTbmNhvsBRISjf/n003Ya7O3Kfne8BYgGn/zDPwogEsQfWaAAokD8kQ0KIALEH1mhAAqP+CM7FEDBEX9kiQIoNOKPbFEABUb8kTUKoLCIP7JHARRU2eIf7lo3NEMBFFJ54r+fJmi61mij/qZf6GS+A1IwFEABlSX+PXWDNnQZ66NeHmgFXyiAwilL/HvpvrrjXeD0fUZkiwIomLLEX7ql4ZhfVlvoweFtFEChlCf+hze98cWloYeHt1EABVKe+EsTm458iXqEHiAkUQAFUqb4y/ic3OzvdgcbwQqAvwt3NkxTtL/D66/VhaGH3MSgrW52Vd+eoYeIsCiArZUr/tJg4ytMBYGSowC2KFv8bW75ygVBFUcBbFa++ANGFEAH4o9KogAk4o/KogCIPyqMAhhK/FFdVS8A4o9Kq3YBDNUUHeDweuKPkqlyARB/VF51C4D4A5UtAOIPqKoFQPwBSdUsAOIPvK16BUD8gXdUrQCIP7CVahUA8Qc6qVIBEH+gi+oUAPEHtlGVAiD+QB3VKADiD9RVhQIg/kAD5S8A4g80VPYCIP5AE+UuAOIPNFXmAiD+gEF5C4D4A0ZlLQDiD1goZwEQf8BKGQuA+AOWylcAxB+wVrYCIP6Ag3IVAPEHnJSpAIg/4Kg8BUD8AWdlKQDiDyRQjgIg/kAiZSgA4g8kFH8BEH8gsdgLgPgDKcRdAMQfSCXmAhim+5zifzXxR0F1M/z/pqwWHG8BDNVk7e/w+mv1tdBDBhoYYPj/tVktONYC4OQfZWIqgHVZLTjOAuDkH+XS3/D/7VktOMYCGKYpTif/V3Pyj0JrVT/DKxZnt+jY8N4fZbO78UPARVktOrYC4OQf5TPK+IoFWS06rgLg6I8y2tv4iplZLTqmAuCTf5ST+QxgRlaLjqcAiD/K6lDD/2/SrNBDDG2o/qqaw3RN6AEXwgjjduItUnh9tdawl17NbuFxnAFw9Ed5HaOehldk9gZA6h567S3E/Xf/XjpCB2qURmk39dUg9dJarVC73tAszdQLelQrQg8xI911sA7VSI3SHuqnQeqttVqlds3TTM3SVD2it0IPsRBGG1/xQughhjRMzzud/F8VesDvGKlv6gGtNox3g57QlToskxGEeguws76ie7XcsOxNel7X67hIzkKz85RxL50ceojhxPnef4C+qL84jbum6fp37eh5HPkXQE99Rvdro9Oaz9XV2jOvXVM4+xi3z0YNCT3IUGKM/1CN01uO4d88rdVE7etxLPkWwACN1ZyEa75Rk3RU3ruqEL5t3DZPhx5iKPHFv4fGGk98zVGYqKGexpNfAbTqbC1IueY1TdLwQHsulBa9bNwq14YeZBjxvff/kGaljkDHtEgXqMXDiPIqgCMt3sfaTSv1DfUIuxtzNcZim1TyE4DY4t9LE7TJUwg6pj94+EQgjwJo0Vit87rmT2hk4L2Zn3uNW6PdeK+AEort5H8vPeM1Ah3TXIs/EDWXfQHsqCkZrPlSnRp4j+bjIIuDxs9DDzJ/scX/CC3MIAQ11bRen0s1sqwLYIRmZrTmmzQu8F7Nwy8ttsRJoQeZt9hO/k9I/bFf8yBclGJs2RbAYZqf4ZrXdH3JrxA4yOLPpYsq9YmI4jv6n6z1mYagppq+kXh0WRbAEVqR+Zr/0MtHocXUogcstsD3Qw8zX7Ed/Y/SqsxDUFNN/5pwfNkVwMiMj/6bp8sD7+HsnGO1/keHHmaeYjv6H6AluYSgpg0J/xSUVQHsrFdzWvOavhh4L2ejTX+zWPfHQw8zT7HFv79eyi0ENa2wuGvMtrIpgG66L8c136Axgfd0FiZarftHQw8zP7HFX7otxxDUVNNz6uM8xmwKwHzxqt9pTumuhf+c1XpPLfmHoFuJL/5n5RyCmmq6znmUWRTAaG3Ifc1/HXp3e7WX5d+NzshjMEX4lDW+7/sP1gxt7/xTr2mWFmuJ2tSmkRrhfC+GjTpczzj9xAi9bHjFRY4fpPbQcwm+rvSmZmiBlqmv+mtPjTLeAGNbH9Uk558ppgF61Oq3fbb20obQg81DbJ/8S9INTiNu1+06ZZsv+AzQifqB4/cGH3UsbP9nABc6jXed7tHZ2qXLPHprtK7RXKc5zVLv0Dvdi576o+Uanxl6qPmI7+RfOsDhJHiZxjU9V+ijLzh9hfYsp5H6LoBhWmY90jW6Trs1mVd3naGpDmv+f8LtcG9aLD/8q+nhQpybZy7Go7/039bj/ZnVF3r6abx1pUxz+mDIdwFcZr3mf7T6Qk8P/ZvaLee40Pj4rOKbYLmu653ugBmtGI/+0h6W1/6t1jkOcx2tNy23wicc5uq3AAZosdUIN+rrDjV1gKZbrnnsVwRcav2bXok7AMQZf+l7VqNdovc6zncPzbCa82MO8/RbAF+xGt8a52/yba/HrOY82/gEvSKzj/88DQw92OzFefIv9dQii9G265gE836XZltti3dbz9FvAdjssY06JcGaD9DTVmt+vO/dmZvxDr/rSbZgZGI9+ksnWYx2kz6ecO77aaXF/L9tPT+fBbC/1Z76SsI138nqLdAP/e3IXNkf/Wv6/6EHm71Yj/6S3QeA16eY/2ct5m//mCifBWDzAeDdKT67fr/FzTEWq5ePnZgzl6P/rPLf/yfeo7/UavF3+7nqn2oZNnfYsb2Jts8CeNY4r1XaPdWa/9hizdPeIyl/Lkf/1Tok9HCzFnP8pQMtRvyZ1MswHwnPs5yXvwIYZHHzinEp13wn40NUavq/KZeRN5f41/TZ0MPNWswn/5L0ReOIX/dwB5d7jEv5ieWc/BWA+bOPVQkuju7qJuNSJqdeRp5cTv4r8Me/uI/+ks03AMd5WMpHjUuZajknfwXwH8Y53ephzQ8yLmW5h6Xkxe3of0/Uf+S0EPvRX5LF36t9PNenp/FGI2stf1n8FcDPjHP6gJctbL7Hgu/Hp2XF7ej/qPqGHnC24j/6SzJ+BDjX03LuNm6fEVbz8VcATxrms87TL/D3jSNOcoVF/tyO/s9pu1ADzeeWA8N0n9PVzVfrwjCbo6mBxt3kcpVeM382vmKPnNfdtLy/qt3Lch41viKGx4iOd7qR61SdoMWhhppHAQzVZKfv+18b/Pv+9Zkv0JzuaUkzjK9oK9i6+1rzmalHEt6l+rrDq6frBC0MN9jsC2Copjgd/a8t5NFfksXf9//maUnm+eR7uUgf42cOb3pa0hsFW3N3lzod/adrjLdtl0jWBVCe+Mvi66grPS1phfEV+cbAXH35rXm6y6yyFln8sy6AMsVf2mR8ha8/5JhvFpbvzaI2Gl/h6/eoaGvuJrr4Z1sA5Yq/zdHJ1/tT8zt8X0fcoq25eT75rrmLCOOfZQGULf7SKuMr0l0Lv4X5M/58L4hZr3WGVwz3tCTzfMxlFEaU8c+uAMoXf+kt45uA/TwtyXw5Ud5/NjJ9Tm1/j4K081mU85rbiTT+WSnHZT/bes2wHis8Pcv1UeMWG2Y1H38XApkfZPkuL2t+u3E5B3tZjl9ul/28pJ1CDzhbZY2/NNm4Lj7uWTPUeNfBpZZz8lcAtxjndK6HNe9p8XXr4v0ZMOr4+38LUMaT/81eMr7Cx9NcTjN+Fu7rspuirfmJxmst3yjcZwCc/HdS3qO/JH3auD6rU39ZpVUvGpdi+5Awf2cAf2+xL9OfnJsfOvrz1MvwK+qjv3/ljr+0i8U6XZ1yGadbLOMfLeflrwB6WNyt8Fcp1/xYizX/Qspl+EX8Oyl7/CVplnGt1iZ6kPdm/S2eE7TR+rtjPm8JZvNIqzQP8u5mdWdgX39n8YH4d1KF+EtXWqzZEwkefrnZjyzm/6D13HwWwBcsRvZ6iq+1jrMKUXEQ/06qEX/pYKu1uyHh3O2eG3+B9fx8FsBQrbMY210JL4c+0erhaOM87sl0iH8nVYm/JMsHWl6SYM4fsXro2FqHo6zfB4P8xmrNf5Dg1uCHabnVvPfxvzsTIf6dVCn+NjcG7ZgudwzCmVprNd+fOszTbwF8xHLNb3O8HOp9Wmo13ynZ7VQnxL+TasVf6quFlmt6l4ZYzrOHxlncdrummjY5/bHNbwG0WN/V8XHLW5ZJLRprWXw1/UM+O9iA+HdStfhLdh9XdUx/05kW5wHv0wvWc5zkNFLfjwc/x3qcSzXW4qu9B+th6zk+m+KpQ/4Q/06qGH9psBY4rPNzOkt9Gsypmz5o9SSgzdNGHeo0Ut8F0MPiIqUt08v6l4Zf723Re3SH5VlPx/Th0LtdxL+LasZfks5zWu+alutn+icd8s73/Htrf52pWzTPcT43OY7TdwFIxzuOeLXu0lgd9c6boZ7aW6foe5bPQd4y3RN6l4v4d1Hd+Eut+ovjL/Dmaa0Wqz3hzy50/iu7/wKQfplw9Ou12OrZx/WmNRoVepcT/86qHH9JOiBxjJNPn3QeZRYFsIPVg7z9Tl8NvbuJf2dVj78k/XPOIfhBgjFmUQDSByweX+pz+l3wj/+IfyfEv0PSk+Ek03MNP0hsJpsCsLsg2tf0huXNT7JD/Dsh/pv10SO5hWB4ohFmVQDd9Kuc1ny5Dgm8l4l/J8R/a0MsLwxONy3TQQnHl1UBSL31YA5rvi74xT/EvxPi39XueiXz+B+beHTZFYA0SE9kHv9TA+9d4t8J8a9nR6vvsSed3kx1CpxlAUj99LsM13ylPhh4zxL/Toh/I21OV/O5TNNTPgU42wKQeuqnGa35PMdrHv0j/p0Q/2a6a5zV99ndpjs0OOW4si4ASTo7gysi7vd0k/HkiH8nxN/sBK8XyKzS+R7GlEcBSAdrusc1X69veXvGYlLEvxPib2eQrrD+amvzaVLKU//N8ikAqY8u1gova/6gDgy5CyUR/y6Iv4sD9PuUEXhO7/c2mrwKQJJ218+dvt237fSKTg9+zR/x74L4uztIE61u7rXt9Ced5DUCeRZAx/ImJPxE4DmdbXH/gOwR/06If1LDdYnTtntN38ng5DfvApCkYfqiHnH4tsB83aBj8tglFoh/J8Q/rXfrS7qj6e1DVuheXaKjMjr1DVEAHYbrfP2k6TMOVusB/T+NKcRxv0Ml49/4F6/Mz/jL2y4apZHaXf3VTwO1Uqu0UnM1S7P0mjZkuNwRetnwiot0VaZrPkx7aZT2UH/102C1a5VWaL5maqZma12mS3bFM/464ehfBuHOAGJTyaN/Y8S/HCgAO8S/E+JfFhSADeLfCfEvDwrAjPh3QvzLhAIwIf6dtOkp4l8iFEBzxL+TXrrfaYNk+wckpEcBNDPe6bd9qnYIPeCs3cjRv2QogMY4+ndxCkf/0qEAGuHo34Xb8+44+seBAqiPo/82biL+JUQB1EP8t7G3ww2tOPmPBwWwLU7+6/gRR/9SogC64uhfxw7WN7Li6B8XCqAzjv51jeXoX1IUwNY4+jdg96x7jv7xoQC24OjfwPZWt2/i6B8jCmAz4t/QJyw2yK/VGnqYSIAC6MDJf0PddaTxNQt0jjaFHiiQ0Hh93eHV0zRG80MPOT+t2sv4msu1IvQwgYSIv8GLhhOiDdo+9BCREG8BeO9v0GqM99NaFHqQQCIc/Y1a1d/wildDDxFI5FKn+E/X8dWLv9RdvQyv4P0/YsTR30qr2g2vGBp6iIAzjv6WWo1H+HeHHiLgaLzTU36maXS5n/LTTKveMLxiT+0bepCAA07+HbRqpvE1Xwo9SMAaJ/9OWjXV+JpznR4SCoTDyb+z0RYXSMzmYqAoVe1CIK75T6CX2i021uMaGHqgcFatAuCqv4TusNpgT2m70AOFoyoVAEf/xD5uudGogNhUpwCIfwq99KblhuONQFyqUgCc/Kd0sfXG4ywgJtUoAI7+qbVpkfUG5CwgHlUoAI7+XnzeYSNyFhCL8hcAR39PWi3vDcxZQEzKXgAc/T0aqWWcBZRMuQuAo79nZzhtUM4Ciq/MBcDRPwPjnDYqZwFFV94C4OifkRs5CyiRshYAR//MtOj7nAWURjkLgKN/pqiA8ihjARD/zFEBZVG+AiD+uaACyqFsBUD8c0MFlEG5CoD454oKiF+ZCoD4544KiF15CoD4B0EFxK0sBUD8g6ECYlaOAiD+QVEB8SpDARD/4KiAWO1m3FdfDj1EA+JfCFRAnHppk2FPfSr0EJsi/oVBBcRpmmE/Ffm5j8S/UKiAGF3WdB+9GHp4TRD/wqEC4rN90/s8fTL08Boi/oVEBcTnrIZ751dqCT24Boh/YVEB8blQG+vsmd+qX+iBNUD8C40KiM8JeqHTPlmii9Qt9KAaIP6FRwXEp1Vj9B3drrt1o04v8I3ciH8UqABkgfhHgwqAb8Q/KlQAfCL+0aEC4AvxjxIVAB+If7SoAKRF/KNGBSAN4h89KgBJEf9SoAKQBPEvDSoAroh/qVABcEH8S4cKgC3iX0pUAGwQ/9KiAmBC/EuNCkAzxL/0qAA0QvwrgQpAPcS/MqgAdEX8K4UKwNaIf+VQAdiM+FcSFQCJ+FcYFQDiX2lUQLUR/8qjAqqL+ENUQFURf7yNCqge4o+tUAHVQvzRBRVQHcQfdVAB1UD80QAVUH7EH01QAeVG/GFABZQX8YcFKqCciD8sUQHlQ/zhgAooF+IPR1RAeRB/JEAFlAPxR0JUQPyIP1KgAuJG/JESFRAv4g8PqIA4EX94QgXEh/jDIyogLsQfnlEB8SD+yAAVEAfij4xQAcVH/JEhKqDYiD8yRgUUF/FHDqiAYiL+yAkVUDzEHzmiAoqF+CNnVEBxEH8EQAUUA/FHIFRAeMQfAVEBYRF/BEYFhEP8UQBUQBjEHwVBBeSP+KNAqIB8EX8UDBWQH+KPAqIC8kH8UVBUQPaIPwqMCsgW8UfBUQHZIf6IABWQDeKPSFAB/hF/RIQK8Iv4IzJUgD/EHxGiAvwg/ogUFZAe8UfEqIB0iD8iRwUkR/xRAlRAMsQfJUEFuCP+KBEqwA3xR8lQAfaIP0qICrBD/FFSVIAZ8UeJUQHNEX+UHBXQGPFHBVAB9RF/VAQVsC3ijwqhAjoj/qgYKmAL4o8KogI6EH9UFBVA/FFpVa8A4o+Kq3IFEH+gshVA/AFJ1awA4g+8o2oVQPyBTqpUAcQf2EZVKoD4A3VVoQKIP9BQ2SuA+ANNlbkCiD9gVNYKIP6AlTJWAPEHrJWtAog/4KRMFUD8AWdlqQDiDyRShgog/kBisVcA8QdSibkCiD+QWqwVQPwBL2KsAOIPeBNbBRB/wKuYKoD4A97FUgHEH8hEDBVA/IHMFL0CiD+QqSJXAPEHMlfUCiD+QC6KWAHEH8hN0SqA+AO5KlIFEH8gd0WpAOIPBFGECiD+QDChK4D4A0GFrADiDwQXqgKIP1AIISqA+AOFkXcFEH+gUPKsAOIPFE5eFUD8gULKowKIP1BYWVcA8QcKLcsKIP5A4WVVAcQfiEIWFUD8gWj4rgDiD0SlVbc4hfZxDWkwpxZd6TSnqdoh9MoDcK2AWTqgzlzadAfxB2LkWgHrdLP22+rnh+orWkD8EUpL6AFEr1U36zzHn5mtF7VAA7W7DlGr009O0xjND73KALZw/Tgw+cRHf0AB5VMBxB8oqOwrgPgDBZZtBRB/oOCyqwDiD0Qgmwog/kAk/FcA8Qci4rcCiD8QmVbd6Cn+z3LVHxCjiz3E/34NDL0aAJL5tJaniv8N6hV6FQAkN1KPJwz/An0s9OABpNWiszXPMfzrdbO2Dz1wAH7011i9bhn+tZqofUIPGIBfPXWyfqaVTaK/UQ/rCxoaeqCoGu4HkJ8eOlzHaD+N0rvUpjat0kot1CzN0KP6k5aGHh6q6H8BGCz8AFqMAywAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDMtMTdUMjA6MzM6MjUrMDA6MDBWM+IYAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTAzLTE3VDIwOjMzOjI1KzAwOjAwJ25apAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="
        ></image>
      </defs>
    </svg>
  )
  export default DiscountIcon
  