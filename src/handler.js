import React from 'react';
class Handler extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: '', inputText: '', mode: 'view' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleChange(e) {
        this.setState({ inputText: e.target.value });
    }

    handleSave() {
        this.setState({ text: this.state.inputText, mode: 'view' });
    }

    handleEdit() {
        this.setState({ mode: 'edit' });
    }

    render() {
        const view = this.state.mode === 'view';

        return (
            <div>
                <p>Text: {this.state.text}</p>

                {
                    !view && (
                        <p>
                            <input
                                onChange={this.handleChange}
                                value={this.state.inputText} />
                        </p>
                    )
                }

                {
                    (() => {
                        const handler = view
                            ? this.handleEdit
                            : this.handleSave;
                        const label = view ? 'Edit' : 'Save';

                        return (
                            <button onClick={handler}>
                                {label}
                            </button>
                        );
                    })()
                }
            </div>
        );
    }
}
export default Handler;