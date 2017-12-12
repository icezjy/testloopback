import chai from 'chai';
import uuid from 'uuid';
import Promise from 'bluebird';

import app from 'server/server';

const { expect } = chai;

describe('common/models/person', () => {

  it('Verify person model', () => new Promise((resolve, reject) => {
    const john = {
      last_name: "Smith",
      first_name: "John",
      address: "Building Ring",
      phone: "12345678"
    }

    app.models.person.create(john, (err, instance) => {
      if (err) {
         reject(err);
      } else {
        instance.updateAttributes({address: "Mars"}, (error, updatedInstance) => {
          expect(error).to.be.not.null;
          resolve();
        })
      }
    });
  }));
});