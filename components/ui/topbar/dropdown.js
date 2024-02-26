import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Dropdown(props) {
  const dropdownElements = props.dropdownElements;
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = (element) => {
    setIsOpen(false);
    if (element.link) {
      // If a link is provided, navigate to it
      window.location.href = element.link;
    } else if (element.handler) {
      // If a handler function is provided, call it
      element.handler(element.state);
    }
  };

  return (
    <Menu as="div" className="relative inline-block text-left z-50">
      <div>
        <Menu.Button
          className="inline-flex justify-center w-full rounded-sm shadow-sm px-4 py-2 text-sm font-medium dark:text-whitepalette active:bg-lime"
          onClick={() => setIsOpen(!isOpen)}
        >
          {props.children}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        show={isOpen}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-left absolute left-3 mt-1 w-56 rounded-md shadow-lg bg-whitepalette dark:bg-greypalette-600 z-50">
          {dropdownElements &&
            dropdownElements.map((element) => (
              <Menu.Item key={element.name}>
                {({ active }) => (
                  <button
                    onClick={() => handleItemClick(element)}
                    className={classNames(
                      active
                        ? 'bg-whitepalette text-blackpalette-900'
                        : 'text-blackpalette-900 dark:text-whitepalette',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    {element.name}
                  </button>
                )}
              </Menu.Item>
            ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default Dropdown;
