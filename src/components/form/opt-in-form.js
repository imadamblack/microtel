import { info } from '../../../info';
import { FormProvider, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { getCookie, setCookie } from 'cookies-next';
import { useState } from 'react';
import { restrictNumber } from '../../utils/formValidators';
import fbEvent from '../../services/fbEvents';
import { Select } from './formAtoms';
import { DataAtlas } from '../../../DataAtlas';
import { urlQueryToSearchParams } from 'next/dist/shared/lib/router/utils/querystring';

export default function OptInForm({city, lastClick = '', onSedeChange}) {
  const [sending, setSending] = useState(false);
  const router = useRouter();
  const methods = useForm({mode: 'all'});
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = methods;

  const onSubmit = (data) => {
    setSending(true);
    data.cleanPhone = '52' + data.phone.replace(/^(MX)?\+?(52)?\s?0?1?|\s|\(|\)|-|[a-zA-Z]/g, '');
    data.origin = 'Notoriovs Landing';
    data.lastClick = lastClick;

    const _fbc = getCookie('_fbc');
    const _fbp = getCookie('_fbp');
    const payload = {...data, _fbc, _fbp};

    const found = DataAtlas.find((sede) => sede.id === city);

    const forwardUrl = `${found.url}?${urlQueryToSearchParams({
      checkInDate: data.checkInDate,
      checkOutDate: data.checkOutDate,
      adults: data.adults,
    })}`;

    fetch(info.optInWebhook, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((result) => result.json())
      // Send FB Event
      .then(({id}) => {
        fbEvent(
          'Lead',
          {email: data.email, phone: data.phone, externalID: id},
        );
        setCookie('lead', {...data, id});

        const forwardLink = document.createElement('a');
        forwardLink.href = forwardUrl;
        forwardLink.target = '_blank';
        forwardLink.click();

        router.push(`/thankyou?forward=${forwardUrl}`);
      })
      .catch(() => {
        fbEvent(
          'Lead',
          {email: data.email, phone: data.phone, externalID: ''},
        );
        setCookie('lead', {...data});

        const forwardLink = document.createElement('a');
        forwardLink.href = forwardUrl;
        forwardLink.target = '_blank';
        forwardLink.click();

        router.push(`/thankyou?forward=${forwardUrl}`);
      });
  };

  return (
    <FormProvider {...methods}>
      <form className="flex flex-col w-full space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-4">
          <div className="w-full">
            <p className="-ft-1 uppercase font-medium">Check In</p>
            <input
              {...register(
                'checkInDate',
                {
                  required: true,
                },
              )}
              type="date"
              className={errors.checkInDate && '!bg-red-200'}
              placeholder="Entrada"/>
          </div>
          <div className="w-full">
            <p className="-ft-1 uppercase font-medium">Check Out</p>
            <input
              {...register(
                'checkOutDate',
                {
                  required: true,
                },
              )}
              type="date"
              className={errors.checkOutDate && '!bg-red-200'}
              placeholder="Salida"/>
          </div>
        </div>
        <input
          {...register(
            'fullName',
            {
              required: true,
            },
          )}
          className={errors.fullName && '!bg-red-200'}
          placeholder="Tu nombre"/>
        <input
          {...register(
            'phone',
            {required: true, maxLength: 10, minLength: 10},
          )}
          className={errors.phone && '!bg-red-200'}
          onKeyDown={restrictNumber}
          placeholder="Teléfono de WhatsApp"/>
        {/*<input*/}
        {/*  {...register(*/}
        {/*    'adults',*/}
        {/*    {required: true},*/}
        {/*  )}*/}
        {/*  type="number"*/}
        {/*  className={errors.phone && '!bg-red-200'}*/}
        {/*  onKeyDown={restrictNumber}*/}
        {/*  placeholder="Huéspedes"/>*/}

        <Select
          name="city"
          inputOptions={{required: true}}
          placeholder="A dónde vas?"
          value={city}
          onChange={(newSede) => onSedeChange(newSede)}
          options={[
            {value: 'gdl', name: 'Guadalajara Sur'},
            {value: 'irapuato', name: 'Irapuato'},
            {value: 'slp', name: 'San Luis Potosí'},
          ]}
        />

        <button
          disabled={sending}
          className={`w-full ${sending ? '!bg-transparent' : 'hover:!bg-brand-3'}`}
        >{
          !sending
            ? 'Reserva →'
            : <span className="material-symbols-outlined animate-spin">progress_activity</span>
        }</button>

        <div className="mt-4">
          <p className="-ft-3 text-center">Aún no se te cobrará nada</p>
        </div>
      </form>
    </FormProvider>
  );
}